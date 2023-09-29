import { UseGuards } from '@nestjs/common';
import {Mutation, Query, Resolver} from '@nestjs/graphql';
import { RolesGuard } from '@zen/nest-auth';
import gql from 'graphql-tag';
import { PostService } from '../../../post/post.service';
import {Post} from "../../../prisma";

export const typeDefs = gql`
  extend type Query {
    posts: [Post]!
  }

  extend type Mutation {
    createPost(data: CreatePostInput): Post!
  }

  type Post {
    id: String!
    createdAt: DateTime
    title: String!
    description: String
  }

  input CreatePostInput {
    title: String!
    description: String
  }
`;

@Resolver('Post')
@UseGuards(RolesGuard('Prisma'))
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query()
  async posts(): Promise<Post[]> {
    return this.postService.getPosts();
  }

  @Mutation()
  async createPost(data: any) {
    return this.postService.createPost(data);
  }
}
