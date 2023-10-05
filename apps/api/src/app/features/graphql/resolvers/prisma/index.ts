// This file is generated automatically. Do not edit it manually.
import { DocumentNode } from 'graphql';

import { FileUploadResolver, typeDefs as FileUploadTypeDefs } from './FileUpload';
import { PostResolver, typeDefs as PostTypeDefs } from './Post';
import { UserResolver, typeDefs as UserTypeDefs } from './User';

export const PRISMA_RESOLVERS = [FileUploadResolver, PostResolver, UserResolver];

export const PRISMA_TYPE_DEFS = [FileUploadTypeDefs, PostTypeDefs, UserTypeDefs].filter(
  x => x
) as DocumentNode[];
