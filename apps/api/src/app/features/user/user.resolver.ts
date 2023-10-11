import { UseGuards } from '@nestjs/common';
import { Args, Info, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { RolesGuard } from '@zen/nest-auth';
import { GraphQLResolveInfo } from 'graphql';

import { AuthService } from '../auth';
import { User } from '../prisma/generated';
import {PrismaSelectService, PrismaService} from "../prisma";
import {
  FindUniqueUserArgs,
  FindFirstUserArgs,
  FindManyUserArgs,
  CreateOneUserArgs,
  UpdateOneUserArgs,
  UpdateManyUserArgs,
  UpsertOneUserArgs,
  DeleteOneUserArgs,
  DeleteManyUserArgs,
} from "../prisma/generated";
import JSON from "graphql-type-json";

@Resolver((of: any) => User)
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

  @ResolveField(() => JSON, { nullable: true })
  async rules(@Parent() parent: User) {
    const ability = await this.auth.createAbility(parent);
    return ability.rules;
  }

  @Query(() => User)
  async findUniqueUser(
    @Args() args: FindUniqueUserArgs,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.prisma.user.findUnique(this.prismaSelect.getArgs(info, args));
  }

  @Query(() => User)
  async findFirstUser(
    @Args() args: FindFirstUserArgs,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.prisma.user.findFirst(this.prismaSelect.getArgs(info, args));
  }

  @Query(() => [User])
  async findManyUser(@Args() args: FindManyUserArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.user.findMany(this.prismaSelect.getArgs(info, args));
  }

  @Query(() => Number)
  async findManyUserCount(@Args() args: FindManyUserArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.user.count(this.prismaSelect.getArgs(info, args));
  }

  @Mutation(() => User)
  async createOneUser(@Args() args: CreateOneUserArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.user.create(this.prismaSelect.getArgs(info, args));
  }

  @Mutation(() => User)
  async updateOneUser(
    @Args() args: UpdateOneUserArgs,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.prisma.user.update(this.prismaSelect.getArgs(info, args));
  }

  @Mutation(() => [User])
  async updateManyUser(@Args() args: UpdateManyUserArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.user.updateMany(this.prismaSelect.getArgs(info, args));
  }

  @Mutation(() => User)
  async upsertOneUser(@Args() args: UpsertOneUserArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.user.upsert(this.prismaSelect.getArgs(info, args));
  }

  @Mutation(() => String)
  async deleteOneUser(
    @Args() args: DeleteOneUserArgs,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.prisma.user.delete(this.prismaSelect.getArgs(info, args));
  }

  @Mutation(() => String)
  async deleteManyUser(@Args() args: DeleteManyUserArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.user.deleteMany(this.prismaSelect.getArgs(info, args));
  }
}
