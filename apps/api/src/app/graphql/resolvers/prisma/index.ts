// This file is generated automatically. Do not edit it manually.
import { DocumentNode } from 'graphql';

import { PostResolver, typeDefs as PostTypeDefs } from './Post';
import { UserResolver, typeDefs as UserTypeDefs } from './User';

export const PRISMA_RESOLVERS = [PostResolver, UserResolver];

export const PRISMA_TYPE_DEFS = [PostTypeDefs, UserTypeDefs].filter(x => x) as DocumentNode[];
