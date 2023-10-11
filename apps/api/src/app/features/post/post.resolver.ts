import { UseGuards } from '@nestjs/common';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RolesGuard } from '@zen/nest-auth';
import { GraphQLResolveInfo } from 'graphql';

import { PrismaSelectService, PrismaService } from '../prisma';
import {
  FindUniquePostArgs,
  FindFirstPostArgs,
  FindManyPostArgs,
  CreateOnePostArgs,
  UpdateOnePostArgs,
  Post,
  UpdateManyPostArgs,
  UpsertOnePostArgs,
  DeleteOnePostArgs,
  DeleteManyPostArgs,
} from "../prisma/generated";

@Resolver('Post')
@UseGuards(RolesGuard('Prisma'))
export class PostResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaSelect: PrismaSelectService
  ) {}

  @Query(() => Post)
  async findUniquePost(@Args() args: FindUniquePostArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.post.findUnique(this.prismaSelect.getArgs(info, args));
  }

  @Query(() => Post)
  async findFirstPost(@Args() args: FindFirstPostArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.post.findFirst(this.prismaSelect.getArgs(info, args));
  }

  @Query(() => [Post])
  async findManyPost(@Args() args: FindManyPostArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.post.findMany(this.prismaSelect.getArgs(info, args));
  }

  @Query(() => Number)
  async findManyPostCount(@Args() args: FindManyPostArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.post.count(this.prismaSelect.getArgs(info, args));
  }

  @Mutation(() => Post)
  async createOnePost(@Args() args: CreateOnePostArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.post.create(this.prismaSelect.getArgs(info, args));
  }

  @Mutation(() => Post)
  async updateOnePost(@Args() args: UpdateOnePostArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.post.update(this.prismaSelect.getArgs(info, args));
  }

  @Mutation(() => [Post])
  async updateManyPost(@Args() args: UpdateManyPostArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.post.updateMany(this.prismaSelect.getArgs(info, args));
  }

  @Mutation(() => [Post])
  async upsertOnePost(@Args() args: UpsertOnePostArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.post.upsert(this.prismaSelect.getArgs(info, args));
  }

  @Mutation(() => String)
  async deleteOnePost(@Args() args: DeleteOnePostArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.post.delete(this.prismaSelect.getArgs(info, args));
  }

  @Mutation(() => String)
  async deleteManyPost(@Args() args: DeleteManyPostArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.post.deleteMany(this.prismaSelect.getArgs(info, args));
  }
}
