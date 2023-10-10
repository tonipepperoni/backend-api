import crypto from 'crypto';

import { HttpException, Logger, UnauthorizedException, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Throttle } from '@nestjs/throttler';
import { ApiError } from '@zen/common';
import { CurrentUser, JwtPayload, RequestUser, RolesGuard } from '@zen/nest-auth';
import { bcrypt, bcryptVerify } from 'hash-wasm';

import { AuthService } from './index';
import { ConfigService } from '../config';
import { JwtService } from '../jwt';
import { MailService } from '../mail';
import { PrismaService } from '../prisma';
import { GqlThrottlerGuard } from '../graphql/gql-throttler.guard';
import {
  AccountInfo,
  AuthExchangeTokenInput,
  AuthLoginInput,
  AuthPasswordChangeInput,
  AuthPasswordResetConfirmationInput,
  AuthPasswordResetRequestInput,
  AuthRegisterInput,
} from '../graphql/models';
import {User} from "../prisma/generated";
import { AuthSession } from "./models/auth-session";

const logger = new Logger('AuthResolver');

@Resolver((of: any) => User)
@UseGuards(GqlThrottlerGuard)
@Throttle(100, 100)
export class AuthResolver {
  constructor(
    private readonly auth: AuthService,
    private readonly config: ConfigService,
    private readonly jwtService: JwtService,
    private readonly mail: MailService,
    private readonly prisma: PrismaService
  ) {}

  @Query(() => AuthSession)
  async authLogin(@Args('data') args: AuthLoginInput) {
    const user = await this.prisma.user.findFirst({
      where: {
        username: {
          mode: 'insensitive',
          equals: args.username,
        },
      },
      select: {
        id: true,
        roles: true,
        password: true,
        email: true,
        username: true,
      },
    });

    if (!user) throw new HttpException(ApiError.AuthLogin.USER_NOT_FOUND, 400);

    const correctPassword = await bcryptVerify({
      password: args.password,
      hash: user.password as string,
    });
    if (!correctPassword) throw new HttpException(ApiError.AuthLogin.INCORRECT_PASSWORD, 400);

    return this.auth.getAuthSession(user, args.rememberMe);
  }

  @Query(() => AccountInfo)
  @UseGuards(RolesGuard())
  async accountInfo(@CurrentUser() reqUser: RequestUser) {
    console.log('req')
    const user = await this.prisma.user.findUnique({
      where: { id: reqUser.id },
      select: {
        id: true,
        username: true,
        email: true,
        avatar: true,
        createdAt: true
      },
    });

    if (!user) throw new UnauthorizedException('User not found');

    return {
      id: user.id,
      email: user.email,
      username: user.username,
      avatar: user.avatar,
      createdAt: user.createdAt
    } satisfies AccountInfo;
  }

  @Query(() => AuthSession)
  @UseGuards(RolesGuard())
  async authExchangeToken(
    @CurrentUser() reqUser: RequestUser,
    @Args('data') args: AuthExchangeTokenInput
  ) {
    const user = await this.prisma.user.findUnique({
      where: { id: reqUser.id },
      select: { id: true, roles: true },
    });

    if (user) {
      return this.auth.getAuthSession(user, args.rememberMe);
    } else {
      throw new UnauthorizedException('User not found');
    }
  }

  @Query(() => String)
  async authPasswordResetRequest(@Args('data') args: AuthPasswordResetRequestInput) {
    const possibleUsers = await this.prisma.user.findMany({
      where: {
        OR: [
          {
            email: {
              equals: args.emailOrUsername,
              mode: 'insensitive',
            },
          },
          {
            username: {
              equals: args.emailOrUsername,
              mode: 'insensitive',
            },
          },
        ],
        AND: [{ username: { not: null } }],
      },
      select: { id: true, email: true },
    });

    if (possibleUsers.length === 0)
      throw new HttpException(ApiError.AuthPasswordResetRequest.USER_NOT_FOUND, 400);

    possibleUsers.forEach(user => this.mail.sendPasswordReset(user));
  }

  @Mutation(() => AuthSession)
  async authPasswordResetConfirmation(@Args('data') args: AuthPasswordResetConfirmationInput) {
    let tokenPayload: JwtPayload;
    try {
      tokenPayload = this.jwtService.verify(args.token);
    } catch {
      throw new UnauthorizedException('JWT failed verification');
    }

    const userExists = await this.prisma.user.findUnique({
      where: { id: tokenPayload.sub },
      select: { id: true },
    });
    if (!userExists) throw new UnauthorizedException('User not found');

    const hashedPassword = await this.hashPassword(args.newPassword);

    const updatedUser = await this.prisma.user.update({
      where: { id: tokenPayload.sub },
      select: { id: true, roles: true },
      data: { password: hashedPassword },
    });

    return this.auth.getAuthSession(updatedUser);
  }

  @Mutation(() => AuthSession)
  async authRegister(@Args('data') args: AuthRegisterInput) {
    if (!this.config.publicRegistration)
      throw new UnauthorizedException('No public registrations allowed');

    const usernameTaken = await this.prisma.user.findFirst({
      where: { username: { equals: args.username, mode: 'insensitive' } },
      select: { username: true },
    });
    if (usernameTaken) throw new HttpException(ApiError.AuthRegister.USERNAME_TAKEN, 400);

    const emailTaken = await this.prisma.user.findFirst({
      where: { email: { equals: args.email, mode: 'insensitive' } },
      select: { email: true },
    });
    if (emailTaken) throw new HttpException(ApiError.AuthRegister.EMAIL_TAKEN, 400);

    const hashedPassword = await this.hashPassword(args.password);

    const user = await this.prisma.user.create({
      data: {
        username: args.username,
        email: args.email,
        password: hashedPassword,
      },
      select: {
        id: true,
        roles: true,
        username: true,
        email: true,
      },
    });

    // Intended to be tailored to the site
    if (this.config.production) {
      this.mail.sendGeneral({
        to: user.email,
        subject: 'Sign Up Confirmed',
        context: {
          siteUrl: this.config.siteUrl,
          hiddenPreheaderText: `Sign up confirmed for ${user.username}`,
          header: 'Welcome',
          subHeading: 'Sign Up Confirmed',
          body: `Thank you for signing up ${user.username}!`,
          footerHeader: '',
          footerBody: '',
        },
      });
    }

    logger.log(`Registered new user: ${user.username}`);

    return this.auth.getAuthSession(user);
  }

  @Mutation(() => String)
  @UseGuards(RolesGuard())
  async authPasswordChange(
    @Args('data') args: AuthPasswordChangeInput,
    @CurrentUser() reqUser: RequestUser
  ) {
    const user = await this.prisma.user.findUnique({
      where: { id: reqUser.id },
      select: {
        id: true,
        password: true,
      },
    });

    if (!user) throw new UnauthorizedException('User not found');

    const correctPassword = await bcryptVerify({
      password: args.oldPassword,
      hash: user.password as string,
    });
    if (!correctPassword) throw new HttpException(ApiError.AuthPasswordChange.WRONG_PASSWORD, 400);

    const hashedPassword = await this.hashPassword(args.newPassword);

    await this.prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
      select: { id: true },
    });

    return "Password was changed";
  }

  private async hashPassword(password: string) {
    return bcrypt({
      costFactor: this.config.bcryptCost,
      password,
      salt: crypto.getRandomValues(new Uint8Array(16)),
    });
  }
}
