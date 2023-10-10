import { UseGuards } from '@nestjs/common';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RolesGuard } from '@zen/nest-auth';
import { GraphQLResolveInfo } from 'graphql';

import { PrismaSelectService, PrismaService } from '../../../prisma';
import type {
  AggregatePostArgs,
  CreateOnePostArgs,
  DeleteManyPostArgs,
  DeleteOnePostArgs,
  FindFirstPostArgs,
  FindManyPostArgs,
  FindUniquePostArgs,
  UpdateManyPostArgs,
  UpdateOnePostArgs,
  UpsertOnePostArgs,
} from '../../resolversTypes';

@Resolver('Post')
@UseGuards(RolesGuard('Prisma'))
export class PostResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaSelect: PrismaSelectService
  ) {}

  @Query()
  async findUniquePost(@Args() args: FindUniquePostArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.post.findUnique(this.prismaSelect.getArgs(info, args));
  }

  @Query()
  async findFirstPost(@Args() args: FindFirstPostArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.post.findFirst(this.prismaSelect.getArgs(info, args));
  }

  @Query()
  async findManyPost(@Args() args: FindManyPostArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.post.findMany(this.prismaSelect.getArgs(info, args));
  }

  @Query()
  async findManyPostCount(@Args() args: FindManyPostArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.post.count(this.prismaSelect.getArgs(info, args));
  }

  @Query()
  async aggregatePost(@Args() args: AggregatePostArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.post.aggregate(this.prismaSelect.getArgs(info, args));
  }

  @Mutation()
  async createOnePost(@Args() args: CreateOnePostArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.post.create(this.prismaSelect.getArgs(info, args));
  }

  @Mutation()
  async updateOnePost(@Args() args: UpdateOnePostArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.post.update(this.prismaSelect.getArgs(info, args));
  }

  @Mutation()
  async updateManyPost(@Args() args: UpdateManyPostArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.post.updateMany(this.prismaSelect.getArgs(info, args));
  }

  @Mutation()
  async upsertOnePost(@Args() args: UpsertOnePostArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.post.upsert(this.prismaSelect.getArgs(info, args));
  }

  @Mutation()
  async deleteOnePost(@Args() args: DeleteOnePostArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.post.delete(this.prismaSelect.getArgs(info, args));
  }

  @Mutation()
  async deleteManyPost(@Args() args: DeleteManyPostArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.post.deleteMany(this.prismaSelect.getArgs(info, args));
  }
}
