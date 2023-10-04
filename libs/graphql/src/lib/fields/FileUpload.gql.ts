import gql from 'graphql-tag';

export const FileUploadFields = gql`
  fragment FileUploadFields on FileUpload {
    id
    # TODO: Add fields
  }
`;
