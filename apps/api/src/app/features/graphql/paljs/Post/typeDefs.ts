import gql from 'graphql-tag';

export default gql`
  type Post {
    id: String!
    title: String!
    content: Json
    published: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
    authorId: String!
    author: User!
  }

  type Query {
    findUniquePost(where: PostWhereUniqueInput!): Post
    findFirstPost(
      where: PostWhereInput
      orderBy: [PostOrderByWithRelationInput]
      cursor: PostWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PostScalarFieldEnum]
    ): Post
    findManyPost(
      where: PostWhereInput
      orderBy: [PostOrderByWithRelationInput]
      cursor: PostWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PostScalarFieldEnum]
    ): [Post!]!
    findManyPostCount(
      where: PostWhereInput
      orderBy: [PostOrderByWithRelationInput]
      cursor: PostWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PostScalarFieldEnum]
    ): Int!
    aggregatePost(
      where: PostWhereInput
      orderBy: [PostOrderByWithRelationInput]
      cursor: PostWhereUniqueInput
      take: Int
      skip: Int
    ): AggregatePost
  }

  type Mutation {
    createOnePost(data: PostCreateInput!): Post!
    updateOnePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post!
    deleteOnePost(where: PostWhereUniqueInput!): Post
    upsertOnePost(
      where: PostWhereUniqueInput!
      create: PostCreateInput!
      update: PostUpdateInput!
    ): Post
    deleteManyPost(where: PostWhereInput): BatchPayload
    updateManyPost(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload
  }
`;
