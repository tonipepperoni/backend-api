import {UseGuards} from '@nestjs/common';
import { Args, Info, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import type { NonNullableFields } from '@zen/common';
import { RolesGuard } from '@zen/nest-auth';
import { GraphQLResolveInfo } from 'graphql';
import gql from 'graphql-tag';
import type { Upload } from "../../models";
import GraphQLUpload from "graphql-upload/GraphQLUpload.js";
import {uploadFiles} from "../../../utils/upload";
import { v4 as uuidv4 } from 'uuid';

import { AuthService } from '../../../auth';
import { PrismaSelectService, PrismaService, User } from '../../../prisma';
import type {
  AggregateUserArgs,
  CreateOneUserArgs,
  DeleteManyUserArgs,
  DeleteOneUserArgs,
  FindFirstUserArgs,
  FindManyUserArgs,
  FindUniqueUserArgs,
  UpdateManyUserArgs,
  UpdateOneUserArgs,
  UpsertOneUserArgs,
} from '../../resolversTypes';
import {createWriteStream} from "node:fs";
import path from "node:path";
import crypto from "crypto";

export const typeDefs = gql`
  extend type User {
    rules: [Json!]!
  }

  extend type Mutation {
    uploadUserAvatar(file: Upload!, email: UserEmail): User
  }

  input UserEmail {
    email: String!
  }
`;

interface UserEmailInput {
  email: string;
}

@Resolver('User')
@UseGuards(RolesGuard('Prisma'))
export class UserResolver {
  constructor(
    private readonly auth: AuthService,
    private readonly prisma: PrismaService,
    private readonly prismaSelect: PrismaSelectService
  ) {}

  @ResolveField()
  async password() {
    return null;
  }

  @ResolveField()
  async rules(@Parent() parent: User) {
    const ability = await this.auth.createAbility(parent);
    return ability.rules;
  }

  @Query()
  async findUniqueUser(
    @Args() args: NonNullableFields<FindUniqueUserArgs>,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.prisma.user.findUnique(this.prismaSelect.getArgs(info, args));
  }

  @Query()
  async findFirstUser(
    @Args() args: NonNullableFields<FindFirstUserArgs>,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.prisma.user.findFirst(this.prismaSelect.getArgs(info, args));
  }

  @Query()
  async findManyUser(@Args() args: FindManyUserArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.user.findMany(this.prismaSelect.getArgs(info, args));
  }

  @Query()
  async findManyUserCount(@Args() args: FindManyUserArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.user.count(this.prismaSelect.getArgs(info, args));
  }

  @Query()
  async aggregateUser(@Args() args: AggregateUserArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.user.aggregate(this.prismaSelect.getArgs(info, args));
  }

  @Mutation()
  async createOneUser(@Args() args: CreateOneUserArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.user.create(this.prismaSelect.getArgs(info, args));
  }

  @Mutation()
  async updateOneUser(
    @Args() args: NonNullableFields<UpdateOneUserArgs>,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.prisma.user.update(this.prismaSelect.getArgs(info, args));
  }

  @Mutation()
  async updateManyUser(@Args() args: UpdateManyUserArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.user.updateMany(this.prismaSelect.getArgs(info, args));
  }

  @Mutation()
  async upsertOneUser(@Args() args: UpsertOneUserArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.user.upsert(this.prismaSelect.getArgs(info, args));
  }

  @Mutation()
  async deleteOneUser(
    @Args() args: NonNullableFields<DeleteOneUserArgs>,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.prisma.user.delete(this.prismaSelect.getArgs(info, args));
  }

  @Mutation()
  async deleteManyUser(@Args() args: DeleteManyUserArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.user.deleteMany(this.prismaSelect.getArgs(info, args));
  }

  @Mutation()
  async uploadUserAvatar(
    @Args("file", {type: () => GraphQLUpload}) file: Upload,
    @Args("email") email: UserEmailInput
  ) {
    await uploadFiles.createUploadDirectory();
    const {createReadStream, filename} = file;
    const imgType = filename.split(".");
    const uniqueFilename = `${Date.now()}-${uuidv4()}.${imgType[1]}`;

    createReadStream()
      .on('error', err => {
        console.log(`${filename} ReadStream Error`, err);
      })
      .pipe(createWriteStream(path.join(uploadFiles.AVATAR_PATH, uniqueFilename)))
      .on('error', err => {
        console.log(`${filename} WriteStream Error`, err);
      });

    return this.prisma.user.update({
      where: email,
      data: {
        avatar: uniqueFilename,
      }
    });
  }
}
