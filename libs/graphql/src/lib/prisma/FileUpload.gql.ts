import gql from 'graphql-tag';

import { FileUploadFields } from '../fields';

export default gql`
  query FindUniqueFileUpload($where: FileUploadWhereUniqueInput!) {
    findUniqueFileUpload(where: $where) {
      ...FileUploadFields
    }
  }

  query FindFirstFileUpload(
    $where: FileUploadWhereInput
    $orderBy: [FileUploadOrderByWithRelationInput]
    $cursor: FileUploadWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [FileUploadScalarFieldEnum]
  ) {
    findFirstFileUpload(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...FileUploadFields
    }
  }

  query FindManyFileUpload(
    $where: FileUploadWhereInput
    $orderBy: [FileUploadOrderByWithRelationInput]
    $cursor: FileUploadWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [FileUploadScalarFieldEnum]
  ) {
    findManyFileUpload(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    ) {
      ...FileUploadFields
    }
  }

  query FindManyFileUploadCount(
    $where: FileUploadWhereInput
    $orderBy: [FileUploadOrderByWithRelationInput]
    $cursor: FileUploadWhereUniqueInput
    $take: Int
    $skip: Int
    $distinct: [FileUploadScalarFieldEnum]
  ) {
    findManyFileUploadCount(
      where: $where
      orderBy: $orderBy
      cursor: $cursor
      take: $take
      skip: $skip
      distinct: $distinct
    )
  }

  mutation CreateOneFileUpload($data: FileUploadCreateInput!) {
    createOneFileUpload(data: $data) {
      ...FileUploadFields
    }
  }

  mutation UpdateOneFileUpload($data: FileUploadUpdateInput!, $where: FileUploadWhereUniqueInput!) {
    updateOneFileUpload(data: $data, where: $where) {
      ...FileUploadFields
    }
  }

  mutation UpdateManyFileUpload($data: FileUploadUpdateManyMutationInput!, $where: FileUploadWhereInput!) {
    updateManyFileUpload(data: $data, where: $where) {
      count
    }
  }

  mutation UpsertOneFileUpload(
    $where: FileUploadWhereUniqueInput!
    $create: FileUploadCreateInput!
    $update: FileUploadUpdateInput!
  ) {
    upsertOneFileUpload(where: $where, create: $create, update: $update) {
      ...FileUploadFields
    }
  }

  mutation DeleteOneFileUpload($where: FileUploadWhereUniqueInput!) {
    deleteOneFileUpload(where: $where) {
      id
    }
  }

  mutation DeleteManyFileUpload($where: FileUploadWhereInput!) {
    deleteManyFileUpload(where: $where) {
      count
    }
  }

  ${FileUploadFields}
`;
