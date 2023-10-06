import gql from 'graphql-tag';

export default gql`
  type FileUpload {
    id: String!
    type: String!
    filePathUrl: String!
    thumbnailPathUrl: String
    createdAt: DateTime!
    updatedAt: DateTime!
    authorId: String!
    author(where: UserWhereInput): User
  }

  type Query {
    findUniqueFileUpload(where: FileUploadWhereUniqueInput!): FileUpload
    findFirstFileUpload(
      where: FileUploadWhereInput
      orderBy: [FileUploadOrderByWithRelationInput]
      cursor: FileUploadWhereUniqueInput
      take: Int
      skip: Int
      distinct: [FileUploadScalarFieldEnum]
    ): FileUpload
    findManyFileUpload(
      where: FileUploadWhereInput
      orderBy: [FileUploadOrderByWithRelationInput]
      cursor: FileUploadWhereUniqueInput
      take: Int
      skip: Int
      distinct: [FileUploadScalarFieldEnum]
    ): [FileUpload!]!
    findManyFileUploadCount(
      where: FileUploadWhereInput
      orderBy: [FileUploadOrderByWithRelationInput]
      cursor: FileUploadWhereUniqueInput
      take: Int
      skip: Int
      distinct: [FileUploadScalarFieldEnum]
    ): Int!
    aggregateFileUpload(
      where: FileUploadWhereInput
      orderBy: [FileUploadOrderByWithRelationInput]
      cursor: FileUploadWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateFileUpload
  }

  type Mutation {
    createOneFileUpload(data: FileUploadCreateInput!): FileUpload!
    updateOneFileUpload(
      data: FileUploadUpdateInput!
      where: FileUploadWhereUniqueInput!
    ): FileUpload!
    deleteOneFileUpload(where: FileUploadWhereUniqueInput!): FileUpload
    upsertOneFileUpload(
      where: FileUploadWhereUniqueInput!
      create: FileUploadCreateInput!
      update: FileUploadUpdateInput!
    ): FileUpload
    deleteManyFileUpload(where: FileUploadWhereInput): BatchPayload
    updateManyFileUpload(
      data: FileUploadUpdateManyMutationInput!
      where: FileUploadWhereInput
    ): BatchPayload
  }
`;
