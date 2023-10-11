import { UseGuards } from '@nestjs/common';
import { Args, Info, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RolesGuard } from '@zen/nest-auth';
import { GraphQLResolveInfo } from 'graphql';

import { PrismaSelectService, PrismaService } from '../../../prisma';
import type {
  AggregateFileUploadArgs,
  CreateOneFileUploadArgs,
  DeleteManyFileUploadArgs,
  DeleteOneFileUploadArgs,
  FindFirstFileUploadArgs,
  FindManyFileUploadArgs,
  FindUniqueFileUploadArgs,
  UpdateManyFileUploadArgs,
  UpdateOneFileUploadArgs,
  UpsertOneFileUploadArgs,
} from '../../resolversTypes';

@Resolver('FileUpload')
@UseGuards(RolesGuard('Prisma'))
export class FileUploadResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly prismaSelect: PrismaSelectService
  ) {}

  @Query()
  async findUniqueFileUpload(
    @Args() args: FindUniqueFileUploadArgs,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.prisma.fileUpload.findUnique(this.prismaSelect.getArgs(info, args));
  }

  @Query()
  async findFirstFileUpload(
    @Args() args: FindFirstFileUploadArgs,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.prisma.fileUpload.findFirst(this.prismaSelect.getArgs(info, args));
  }

  @Query()
  async findManyFileUpload(@Args() args: FindManyFileUploadArgs, @Info() info: GraphQLResolveInfo) {
    return this.prisma.fileUpload.findMany(this.prismaSelect.getArgs(info, args));
  }

  @Query()
  async findManyFileUploadCount(
    @Args() args: FindManyFileUploadArgs,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.prisma.fileUpload.count(this.prismaSelect.getArgs(info, args));
  }

  @Query()
  async aggregateFileUpload(
    @Args() args: AggregateFileUploadArgs,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.prisma.fileUpload.aggregate(this.prismaSelect.getArgs(info, args));
  }

  @Mutation()
  async createOneFileUpload(
    @Args() args: CreateOneFileUploadArgs,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.prisma.fileUpload.create(this.prismaSelect.getArgs(info, args));
  }

  @Mutation()
  async updateOneFileUpload(
    @Args() args: UpdateOneFileUploadArgs,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.prisma.fileUpload.update(this.prismaSelect.getArgs(info, args));
  }

  @Mutation()
  async updateManyFileUpload(
    @Args() args: UpdateManyFileUploadArgs,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.prisma.fileUpload.updateMany(this.prismaSelect.getArgs(info, args));
  }

  @Mutation()
  async upsertOneFileUpload(
    @Args() args: UpsertOneFileUploadArgs,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.prisma.fileUpload.upsert(this.prismaSelect.getArgs(info, args));
  }

  @Mutation()
  async deleteOneFileUpload(
    @Args() args: DeleteOneFileUploadArgs,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.prisma.fileUpload.delete(this.prismaSelect.getArgs(info, args));
  }

  @Mutation()
  async deleteManyFileUpload(
    @Args() args: DeleteManyFileUploadArgs,
    @Info() info: GraphQLResolveInfo
  ) {
    return this.prisma.fileUpload.deleteMany(this.prismaSelect.getArgs(info, args));
  }
}
