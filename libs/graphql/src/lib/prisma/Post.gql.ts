import gql from 'graphql-tag';

import { PostFields } from '../fields';

export default gql`
  query FindUniquePost($where: PostWhereUniqueInput!) {
    findUniquePost(where: $where) {
      ...PostFields
    }
  }

  query FindFirstPost(
    $where: PostWhereInput
    $orderBy: [PostOrderByWithRelationInput]
    $cursor: PostWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [PostScalarFieldEnum]
  ) {
    findFirstPost(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...PostFields
    }
  }

  query FindManyPost(
    $where: PostWhereInput
    $orderBy: [PostOrderByWithRelationInput]
    $cursor: PostWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [PostScalarFieldEnum]
  ) {
    findManyPost(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...PostFields
    }
  }

  query FindManyPostCount(
    $where: PostWhereInput
    $orderBy: [PostOrderByWithRelationInput]
    $cursor: PostWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [PostScalarFieldEnum]
  ) {
    findManyPostCount(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    )
  }

  mutation CreateOnePost($data: PostCreateInput!) {
    createOnePost(data: $data) {
      ...PostFields
    }
  }

  mutation UpdateOnePost($data: PostUpdateInput!, $where: PostWhereUniqueInput!) {
    updateOnePost(data: $data, where: $where) {
      ...PostFields
    }
  }

  mutation UpdateManyPost($data: PostUpdateManyMutationInput!, $where: PostWhereInput!) {
    updateManyPost(data: $data, where: $where) {
      count
    }
  }

  mutation UpsertOnePost(
    $where: PostWhereUniqueInput!
    $create: PostCreateInput!
    $update: PostUpdateInput!
  ) {
    upsertOnePost(where: $where, create: $create, update: $update) {
      ...PostFields
    }
  }

  mutation DeleteOnePost($where: PostWhereUniqueInput!) {
    deleteOnePost(where: $where) {
      id
    }
  }

  mutation DeleteManyPost($where: PostWhereInput!) {
    deleteManyPost(where: $where) {
      count
    }
  }

  ${PostFields}
`;
