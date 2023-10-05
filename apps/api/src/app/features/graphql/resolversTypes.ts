import { GraphQLResolveInfo } from 'graphql';

import * as Client from '../prisma';
import { Context } from './context';

type Resolver<T extends {}, A extends {}, R extends any> = (
  parent: T,
  args: A,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<R>;

type NoExpand<T> = T extends unknown ? T : never;

type AtLeast<O extends object, K extends string> = NoExpand<
  O extends unknown
    ?
        | (K extends keyof O ? { [P in K]: O[P] } & O : O)
        | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
    : never
>;

export type Resolvers = {
  [key: string]: { [key: string]: Resolver<any, any, any> };
} & {
  User?: User;
  FileUpload?: FileUpload;
  Post?: Post;
  Query?: Query;
  Mutation?: Mutation;
  AggregateUser?: AggregateUser;
  UserGroupByOutputType?: UserGroupByOutputType;
  AggregateFileUpload?: AggregateFileUpload;
  FileUploadGroupByOutputType?: FileUploadGroupByOutputType;
  AggregatePost?: AggregatePost;
  PostGroupByOutputType?: PostGroupByOutputType;
  AffectedRowsOutput?: AffectedRowsOutput;
  UserCountOutputType?: UserCountOutputType;
  UserCountAggregateOutputType?: UserCountAggregateOutputType;
  UserMinAggregateOutputType?: UserMinAggregateOutputType;
  UserMaxAggregateOutputType?: UserMaxAggregateOutputType;
  FileUploadCountOutputType?: FileUploadCountOutputType;
  FileUploadCountAggregateOutputType?: FileUploadCountAggregateOutputType;
  FileUploadMinAggregateOutputType?: FileUploadMinAggregateOutputType;
  FileUploadMaxAggregateOutputType?: FileUploadMaxAggregateOutputType;
  PostCountAggregateOutputType?: PostCountAggregateOutputType;
  PostMinAggregateOutputType?: PostMinAggregateOutputType;
  PostMaxAggregateOutputType?: PostMaxAggregateOutputType;
};

export type User = { [key: string]: Resolver<any, any, any> } & {
  id?: Resolver<Client.User, {}, string>;
  createdAt?: Resolver<Client.User, {}, Date>;
  username?: Resolver<Client.User, {}, string | null>;
  password?: Resolver<Client.User, {}, string | null>;
  email?: Resolver<Client.User, {}, string>;
  roles?: Resolver<Client.User, {}, string[] | null>;
  googleId?: Resolver<Client.User, {}, string | null>;
  googleProfile?: Resolver<Client.User, {}, any | null>;
  avatarId?: Resolver<Client.User, {}, string | null>;
  Post?: Resolver<Client.User, UserPostArgs, Client.Post[] | null>;
  avatar?: Resolver<Client.User, UserAvatarArgs, Client.FileUpload | null>;
  _count?: Resolver<Client.User, {}, Client.Prisma.UserCountOutputType>;
};

export type FileUpload = { [key: string]: Resolver<any, any, any> } & {
  id?: Resolver<Client.FileUpload, {}, string>;
  type?: Resolver<Client.FileUpload, {}, string>;
  filePathUrl?: Resolver<Client.FileUpload, {}, string>;
  thumbnailPathUrl?: Resolver<Client.FileUpload, {}, string | null>;
  createdAt?: Resolver<Client.FileUpload, {}, Date>;
  updatedAt?: Resolver<Client.FileUpload, {}, Date>;
  authorId?: Resolver<Client.FileUpload, {}, string>;
  author?: Resolver<Client.FileUpload, FileUploadAuthorArgs, Client.User[] | null>;
  _count?: Resolver<Client.FileUpload, {}, Client.Prisma.FileUploadCountOutputType>;
};

export type Post = { [key: string]: Resolver<any, any, any> } & {
  id?: Resolver<Client.Post, {}, string>;
  title?: Resolver<Client.Post, {}, string>;
  content?: Resolver<Client.Post, {}, any | null>;
  published?: Resolver<Client.Post, {}, boolean>;
  createdAt?: Resolver<Client.Post, {}, Date>;
  updatedAt?: Resolver<Client.Post, {}, Date>;
  authorId?: Resolver<Client.Post, {}, string>;
  author?: Resolver<Client.Post, {}, Client.User>;
};

export type Query = { [key: string]: Resolver<any, any, any> } & {
  findFirstUser?: Resolver<{}, FindFirstUserArgs, Client.User | null>;
  findFirstUserOrThrow?: Resolver<{}, FindFirstUserOrThrowArgs, Client.User | null>;
  findManyUser?: Resolver<{}, FindManyUserArgs, Client.User[]>;
  findManyUserCount?: Resolver<{}, FindManyUserArgs, number>;
  aggregateUser?: Resolver<
    {},
    AggregateUserArgs,
    Client.Prisma.GetUserAggregateType<AggregateUserArgs>
  >;
  groupByUser?: Resolver<{}, GroupByUserArgs, Client.Prisma.UserGroupByOutputType[]>;
  findUniqueUser?: Resolver<{}, FindUniqueUserArgs, Client.User | null>;
  findUniqueUserOrThrow?: Resolver<{}, FindUniqueUserOrThrowArgs, Client.User | null>;
  findFirstFileUpload?: Resolver<{}, FindFirstFileUploadArgs, Client.FileUpload | null>;
  findFirstFileUploadOrThrow?: Resolver<
    {},
    FindFirstFileUploadOrThrowArgs,
    Client.FileUpload | null
  >;
  findManyFileUpload?: Resolver<{}, FindManyFileUploadArgs, Client.FileUpload[]>;
  findManyFileUploadCount?: Resolver<{}, FindManyFileUploadArgs, number>;
  aggregateFileUpload?: Resolver<
    {},
    AggregateFileUploadArgs,
    Client.Prisma.GetFileUploadAggregateType<AggregateFileUploadArgs>
  >;
  groupByFileUpload?: Resolver<
    {},
    GroupByFileUploadArgs,
    Client.Prisma.FileUploadGroupByOutputType[]
  >;
  findUniqueFileUpload?: Resolver<{}, FindUniqueFileUploadArgs, Client.FileUpload | null>;
  findUniqueFileUploadOrThrow?: Resolver<
    {},
    FindUniqueFileUploadOrThrowArgs,
    Client.FileUpload | null
  >;
  findFirstPost?: Resolver<{}, FindFirstPostArgs, Client.Post | null>;
  findFirstPostOrThrow?: Resolver<{}, FindFirstPostOrThrowArgs, Client.Post | null>;
  findManyPost?: Resolver<{}, FindManyPostArgs, Client.Post[]>;
  findManyPostCount?: Resolver<{}, FindManyPostArgs, number>;
  aggregatePost?: Resolver<
    {},
    AggregatePostArgs,
    Client.Prisma.GetPostAggregateType<AggregatePostArgs>
  >;
  groupByPost?: Resolver<{}, GroupByPostArgs, Client.Prisma.PostGroupByOutputType[]>;
  findUniquePost?: Resolver<{}, FindUniquePostArgs, Client.Post | null>;
  findUniquePostOrThrow?: Resolver<{}, FindUniquePostOrThrowArgs, Client.Post | null>;
};

export type Mutation = { [key: string]: Resolver<any, any, any> } & {
  createOneUser?: Resolver<{}, CreateOneUserArgs, Client.User>;
  upsertOneUser?: Resolver<{}, UpsertOneUserArgs, Client.User>;
  createManyUser?: Resolver<{}, CreateManyUserArgs, Client.Prisma.BatchPayload>;
  deleteOneUser?: Resolver<{}, DeleteOneUserArgs, Client.User | null>;
  updateOneUser?: Resolver<{}, UpdateOneUserArgs, Client.User | null>;
  updateManyUser?: Resolver<{}, UpdateManyUserArgs, Client.Prisma.BatchPayload>;
  deleteManyUser?: Resolver<{}, DeleteManyUserArgs, Client.Prisma.BatchPayload>;
  createOneFileUpload?: Resolver<{}, CreateOneFileUploadArgs, Client.FileUpload>;
  upsertOneFileUpload?: Resolver<{}, UpsertOneFileUploadArgs, Client.FileUpload>;
  createManyFileUpload?: Resolver<{}, CreateManyFileUploadArgs, Client.Prisma.BatchPayload>;
  deleteOneFileUpload?: Resolver<{}, DeleteOneFileUploadArgs, Client.FileUpload | null>;
  updateOneFileUpload?: Resolver<{}, UpdateOneFileUploadArgs, Client.FileUpload | null>;
  updateManyFileUpload?: Resolver<{}, UpdateManyFileUploadArgs, Client.Prisma.BatchPayload>;
  deleteManyFileUpload?: Resolver<{}, DeleteManyFileUploadArgs, Client.Prisma.BatchPayload>;
  createOnePost?: Resolver<{}, CreateOnePostArgs, Client.Post>;
  upsertOnePost?: Resolver<{}, UpsertOnePostArgs, Client.Post>;
  createManyPost?: Resolver<{}, CreateManyPostArgs, Client.Prisma.BatchPayload>;
  deleteOnePost?: Resolver<{}, DeleteOnePostArgs, Client.Post | null>;
  updateOnePost?: Resolver<{}, UpdateOnePostArgs, Client.Post | null>;
  updateManyPost?: Resolver<{}, UpdateManyPostArgs, Client.Prisma.BatchPayload>;
  deleteManyPost?: Resolver<{}, DeleteManyPostArgs, Client.Prisma.BatchPayload>;
  executeRaw?: Resolver<{}, ExecuteRawArgs, any>;
  queryRaw?: Resolver<{}, QueryRawArgs, any>;
};

export type AggregateUser = { [key: string]: Resolver<any, any, any> } & {
  _count?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >;
  _min?: Resolver<Client.Prisma.AggregateUser, {}, Client.Prisma.UserMinAggregateOutputType | null>;
  _max?: Resolver<Client.Prisma.AggregateUser, {}, Client.Prisma.UserMaxAggregateOutputType | null>;
};

export type UserGroupByOutputType = {
  [key: string]: Resolver<any, any, any>;
} & {
  id?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>;
  createdAt?: Resolver<Client.Prisma.UserGroupByOutputType, {}, Date>;
  username?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>;
  password?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>;
  email?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>;
  roles?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string[] | null>;
  googleId?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>;
  googleProfile?: Resolver<Client.Prisma.UserGroupByOutputType, {}, any | null>;
  avatarId?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>;
  _count?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >;
};

export type AggregateFileUpload = { [key: string]: Resolver<any, any, any> } & {
  _count?: Resolver<
    Client.Prisma.AggregateFileUpload,
    {},
    Client.Prisma.FileUploadCountAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.AggregateFileUpload,
    {},
    Client.Prisma.FileUploadMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.AggregateFileUpload,
    {},
    Client.Prisma.FileUploadMaxAggregateOutputType | null
  >;
};

export type FileUploadGroupByOutputType = {
  [key: string]: Resolver<any, any, any>;
} & {
  id?: Resolver<Client.Prisma.FileUploadGroupByOutputType, {}, string>;
  type?: Resolver<Client.Prisma.FileUploadGroupByOutputType, {}, string>;
  filePathUrl?: Resolver<Client.Prisma.FileUploadGroupByOutputType, {}, string>;
  thumbnailPathUrl?: Resolver<Client.Prisma.FileUploadGroupByOutputType, {}, string | null>;
  createdAt?: Resolver<Client.Prisma.FileUploadGroupByOutputType, {}, Date>;
  updatedAt?: Resolver<Client.Prisma.FileUploadGroupByOutputType, {}, Date>;
  authorId?: Resolver<Client.Prisma.FileUploadGroupByOutputType, {}, string>;
  _count?: Resolver<
    Client.Prisma.FileUploadGroupByOutputType,
    {},
    Client.Prisma.FileUploadCountAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.FileUploadGroupByOutputType,
    {},
    Client.Prisma.FileUploadMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.FileUploadGroupByOutputType,
    {},
    Client.Prisma.FileUploadMaxAggregateOutputType | null
  >;
};

export type AggregatePost = { [key: string]: Resolver<any, any, any> } & {
  _count?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostCountAggregateOutputType | null
  >;
  _min?: Resolver<Client.Prisma.AggregatePost, {}, Client.Prisma.PostMinAggregateOutputType | null>;
  _max?: Resolver<Client.Prisma.AggregatePost, {}, Client.Prisma.PostMaxAggregateOutputType | null>;
};

export type PostGroupByOutputType = {
  [key: string]: Resolver<any, any, any>;
} & {
  id?: Resolver<Client.Prisma.PostGroupByOutputType, {}, string>;
  title?: Resolver<Client.Prisma.PostGroupByOutputType, {}, string>;
  content?: Resolver<Client.Prisma.PostGroupByOutputType, {}, any | null>;
  published?: Resolver<Client.Prisma.PostGroupByOutputType, {}, boolean>;
  createdAt?: Resolver<Client.Prisma.PostGroupByOutputType, {}, Date>;
  updatedAt?: Resolver<Client.Prisma.PostGroupByOutputType, {}, Date>;
  authorId?: Resolver<Client.Prisma.PostGroupByOutputType, {}, string>;
  _count?: Resolver<
    Client.Prisma.PostGroupByOutputType,
    {},
    Client.Prisma.PostCountAggregateOutputType | null
  >;
  _min?: Resolver<
    Client.Prisma.PostGroupByOutputType,
    {},
    Client.Prisma.PostMinAggregateOutputType | null
  >;
  _max?: Resolver<
    Client.Prisma.PostGroupByOutputType,
    {},
    Client.Prisma.PostMaxAggregateOutputType | null
  >;
};

export type AffectedRowsOutput = { [key: string]: Resolver<any, any, any> } & {
  count?: Resolver<Client.Prisma.BatchPayload, {}, number>;
};

export type UserCountOutputType = { [key: string]: Resolver<any, any, any> } & {
  Post?: Resolver<Client.Prisma.UserCountOutputType, UserCountOutputTypePostArgs, number>;
};

export type UserCountAggregateOutputType = {
  [key: string]: Resolver<any, any, any>;
} & {
  id?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  createdAt?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  username?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  password?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  email?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  roles?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  googleId?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  googleProfile?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  avatarId?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
  _all?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>;
};

export type UserMinAggregateOutputType = {
  [key: string]: Resolver<any, any, any>;
} & {
  id?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>;
  createdAt?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, Date | null>;
  username?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>;
  password?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>;
  email?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>;
  googleId?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>;
  avatarId?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>;
};

export type UserMaxAggregateOutputType = {
  [key: string]: Resolver<any, any, any>;
} & {
  id?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>;
  createdAt?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, Date | null>;
  username?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>;
  password?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>;
  email?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>;
  googleId?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>;
  avatarId?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>;
};

export type FileUploadCountOutputType = {
  [key: string]: Resolver<any, any, any>;
} & {
  author?: Resolver<
    Client.Prisma.FileUploadCountOutputType,
    FileUploadCountOutputTypeAuthorArgs,
    number
  >;
};

export type FileUploadCountAggregateOutputType = {
  [key: string]: Resolver<any, any, any>;
} & {
  id?: Resolver<Client.Prisma.FileUploadCountAggregateOutputType, {}, number>;
  type?: Resolver<Client.Prisma.FileUploadCountAggregateOutputType, {}, number>;
  filePathUrl?: Resolver<Client.Prisma.FileUploadCountAggregateOutputType, {}, number>;
  thumbnailPathUrl?: Resolver<Client.Prisma.FileUploadCountAggregateOutputType, {}, number>;
  createdAt?: Resolver<Client.Prisma.FileUploadCountAggregateOutputType, {}, number>;
  updatedAt?: Resolver<Client.Prisma.FileUploadCountAggregateOutputType, {}, number>;
  authorId?: Resolver<Client.Prisma.FileUploadCountAggregateOutputType, {}, number>;
  _all?: Resolver<Client.Prisma.FileUploadCountAggregateOutputType, {}, number>;
};

export type FileUploadMinAggregateOutputType = {
  [key: string]: Resolver<any, any, any>;
} & {
  id?: Resolver<Client.Prisma.FileUploadMinAggregateOutputType, {}, string | null>;
  type?: Resolver<Client.Prisma.FileUploadMinAggregateOutputType, {}, string | null>;
  filePathUrl?: Resolver<Client.Prisma.FileUploadMinAggregateOutputType, {}, string | null>;
  thumbnailPathUrl?: Resolver<Client.Prisma.FileUploadMinAggregateOutputType, {}, string | null>;
  createdAt?: Resolver<Client.Prisma.FileUploadMinAggregateOutputType, {}, Date | null>;
  updatedAt?: Resolver<Client.Prisma.FileUploadMinAggregateOutputType, {}, Date | null>;
  authorId?: Resolver<Client.Prisma.FileUploadMinAggregateOutputType, {}, string | null>;
};

export type FileUploadMaxAggregateOutputType = {
  [key: string]: Resolver<any, any, any>;
} & {
  id?: Resolver<Client.Prisma.FileUploadMaxAggregateOutputType, {}, string | null>;
  type?: Resolver<Client.Prisma.FileUploadMaxAggregateOutputType, {}, string | null>;
  filePathUrl?: Resolver<Client.Prisma.FileUploadMaxAggregateOutputType, {}, string | null>;
  thumbnailPathUrl?: Resolver<Client.Prisma.FileUploadMaxAggregateOutputType, {}, string | null>;
  createdAt?: Resolver<Client.Prisma.FileUploadMaxAggregateOutputType, {}, Date | null>;
  updatedAt?: Resolver<Client.Prisma.FileUploadMaxAggregateOutputType, {}, Date | null>;
  authorId?: Resolver<Client.Prisma.FileUploadMaxAggregateOutputType, {}, string | null>;
};

export type PostCountAggregateOutputType = {
  [key: string]: Resolver<any, any, any>;
} & {
  id?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>;
  title?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>;
  content?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>;
  published?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>;
  createdAt?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>;
  updatedAt?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>;
  authorId?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>;
  _all?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>;
};

export type PostMinAggregateOutputType = {
  [key: string]: Resolver<any, any, any>;
} & {
  id?: Resolver<Client.Prisma.PostMinAggregateOutputType, {}, string | null>;
  title?: Resolver<Client.Prisma.PostMinAggregateOutputType, {}, string | null>;
  published?: Resolver<Client.Prisma.PostMinAggregateOutputType, {}, boolean | null>;
  createdAt?: Resolver<Client.Prisma.PostMinAggregateOutputType, {}, Date | null>;
  updatedAt?: Resolver<Client.Prisma.PostMinAggregateOutputType, {}, Date | null>;
  authorId?: Resolver<Client.Prisma.PostMinAggregateOutputType, {}, string | null>;
};

export type PostMaxAggregateOutputType = {
  [key: string]: Resolver<any, any, any>;
} & {
  id?: Resolver<Client.Prisma.PostMaxAggregateOutputType, {}, string | null>;
  title?: Resolver<Client.Prisma.PostMaxAggregateOutputType, {}, string | null>;
  published?: Resolver<Client.Prisma.PostMaxAggregateOutputType, {}, boolean | null>;
  createdAt?: Resolver<Client.Prisma.PostMaxAggregateOutputType, {}, Date | null>;
  updatedAt?: Resolver<Client.Prisma.PostMaxAggregateOutputType, {}, Date | null>;
  authorId?: Resolver<Client.Prisma.PostMaxAggregateOutputType, {}, string | null>;
};

export type UserPostArgs = {
  where?: PostWhereInput;
  orderBy?: PostOrderByWithRelationInput[];
  cursor?: PostWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: PostScalarFieldEnum[];
};

export type UserAvatarArgs = {
  where?: FileUploadWhereInput;
};

export type FileUploadAuthorArgs = {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithRelationInput[];
  cursor?: UserWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UserScalarFieldEnum[];
};

export type FindFirstUserArgs = {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithRelationInput[];
  cursor?: UserWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UserScalarFieldEnum[];
};

export type FindFirstUserOrThrowArgs = {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithRelationInput[];
  cursor?: UserWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UserScalarFieldEnum[];
};

export type FindManyUserArgs = {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithRelationInput[];
  cursor?: UserWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: UserScalarFieldEnum[];
};

export type AggregateUserArgs = {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithRelationInput[];
  cursor?: UserWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.UserCountAggregateInputType;
  _min?: Client.Prisma.UserMinAggregateInputType;
  _max?: Client.Prisma.UserMaxAggregateInputType;
};

export type GroupByUserArgs = {
  where?: UserWhereInput;
  orderBy?: UserOrderByWithAggregationInput[];
  by: UserScalarFieldEnum[];
  having?: UserScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
};

export type FindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};

export type FindUniqueUserOrThrowArgs = {
  where: UserWhereUniqueInput;
};

export type FindFirstFileUploadArgs = {
  where?: FileUploadWhereInput;
  orderBy?: FileUploadOrderByWithRelationInput[];
  cursor?: FileUploadWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: FileUploadScalarFieldEnum[];
};

export type FindFirstFileUploadOrThrowArgs = {
  where?: FileUploadWhereInput;
  orderBy?: FileUploadOrderByWithRelationInput[];
  cursor?: FileUploadWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: FileUploadScalarFieldEnum[];
};

export type FindManyFileUploadArgs = {
  where?: FileUploadWhereInput;
  orderBy?: FileUploadOrderByWithRelationInput[];
  cursor?: FileUploadWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: FileUploadScalarFieldEnum[];
};

export type AggregateFileUploadArgs = {
  where?: FileUploadWhereInput;
  orderBy?: FileUploadOrderByWithRelationInput[];
  cursor?: FileUploadWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.FileUploadCountAggregateInputType;
  _min?: Client.Prisma.FileUploadMinAggregateInputType;
  _max?: Client.Prisma.FileUploadMaxAggregateInputType;
};

export type GroupByFileUploadArgs = {
  where?: FileUploadWhereInput;
  orderBy?: FileUploadOrderByWithAggregationInput[];
  by: FileUploadScalarFieldEnum[];
  having?: FileUploadScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
};

export type FindUniqueFileUploadArgs = {
  where: FileUploadWhereUniqueInput;
};

export type FindUniqueFileUploadOrThrowArgs = {
  where: FileUploadWhereUniqueInput;
};

export type FindFirstPostArgs = {
  where?: PostWhereInput;
  orderBy?: PostOrderByWithRelationInput[];
  cursor?: PostWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: PostScalarFieldEnum[];
};

export type FindFirstPostOrThrowArgs = {
  where?: PostWhereInput;
  orderBy?: PostOrderByWithRelationInput[];
  cursor?: PostWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: PostScalarFieldEnum[];
};

export type FindManyPostArgs = {
  where?: PostWhereInput;
  orderBy?: PostOrderByWithRelationInput[];
  cursor?: PostWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: PostScalarFieldEnum[];
};

export type AggregatePostArgs = {
  where?: PostWhereInput;
  orderBy?: PostOrderByWithRelationInput[];
  cursor?: PostWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: Client.Prisma.PostCountAggregateInputType;
  _min?: Client.Prisma.PostMinAggregateInputType;
  _max?: Client.Prisma.PostMaxAggregateInputType;
};

export type GroupByPostArgs = {
  where?: PostWhereInput;
  orderBy?: PostOrderByWithAggregationInput[];
  by: PostScalarFieldEnum[];
  having?: PostScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
};

export type FindUniquePostArgs = {
  where: PostWhereUniqueInput;
};

export type FindUniquePostOrThrowArgs = {
  where: PostWhereUniqueInput;
};

export type CreateOneUserArgs = {
  data: UserCreateInput;
};

export type UpsertOneUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};

export type CreateManyUserArgs = {
  data: UserCreateManyInput[];
  skipDuplicates?: boolean;
};

export type DeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};

export type UpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: UserWhereInput;
};

export type DeleteManyUserArgs = {
  where?: UserWhereInput;
};

export type CreateOneFileUploadArgs = {
  data: FileUploadCreateInput;
};

export type UpsertOneFileUploadArgs = {
  where: FileUploadWhereUniqueInput;
  create: FileUploadCreateInput;
  update: FileUploadUpdateInput;
};

export type CreateManyFileUploadArgs = {
  data: FileUploadCreateManyInput[];
  skipDuplicates?: boolean;
};

export type DeleteOneFileUploadArgs = {
  where: FileUploadWhereUniqueInput;
};

export type UpdateOneFileUploadArgs = {
  data: FileUploadUpdateInput;
  where: FileUploadWhereUniqueInput;
};

export type UpdateManyFileUploadArgs = {
  data: FileUploadUpdateManyMutationInput;
  where?: FileUploadWhereInput;
};

export type DeleteManyFileUploadArgs = {
  where?: FileUploadWhereInput;
};

export type CreateOnePostArgs = {
  data: PostCreateInput;
};

export type UpsertOnePostArgs = {
  where: PostWhereUniqueInput;
  create: PostCreateInput;
  update: PostUpdateInput;
};

export type CreateManyPostArgs = {
  data: PostCreateManyInput[];
  skipDuplicates?: boolean;
};

export type DeleteOnePostArgs = {
  where: PostWhereUniqueInput;
};

export type UpdateOnePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};

export type UpdateManyPostArgs = {
  data: PostUpdateManyMutationInput;
  where?: PostWhereInput;
};

export type DeleteManyPostArgs = {
  where?: PostWhereInput;
};

export type ExecuteRawArgs = {
  query: string;
  parameters?: any;
};

export type QueryRawArgs = {
  query: string;
  parameters?: any;
};

export type UserCountOutputTypePostArgs = {
  where?: PostWhereInput;
};

export type FileUploadCountOutputTypeAuthorArgs = {
  where?: UserWhereInput;
};

export type UserWhereInput = {
  AND?: UserWhereInput[];
  OR?: UserWhereInput[];
  NOT?: UserWhereInput[];
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  username?: StringNullableFilter | null;
  password?: StringNullableFilter | null;
  email?: StringFilter;
  roles?: StringNullableListFilter;
  googleId?: StringNullableFilter | null;
  googleProfile?: JsonNullableFilter;
  avatarId?: StringNullableFilter | null;
  Post?: PostListRelationFilter;
  avatar?: FileUploadNullableRelationFilter | null;
};

export type UserOrderByWithRelationInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrderInput;
  password?: SortOrderInput;
  email?: SortOrder;
  roles?: SortOrder;
  googleId?: SortOrderInput;
  googleProfile?: SortOrderInput;
  avatarId?: SortOrderInput;
  Post?: PostOrderByRelationAggregateInput;
  avatar?: FileUploadOrderByWithRelationInput;
};

export type UserWhereUniqueInput = AtLeast<
  {
    id?: string;
    username?: string;
    email?: string;
    googleId?: string;
    AND?: UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput[];
    createdAt?: DateTimeFilter;
    password?: StringNullableFilter | null;
    roles?: StringNullableListFilter;
    googleProfile?: JsonNullableFilter;
    avatarId?: StringNullableFilter | null;
    Post?: PostListRelationFilter;
    avatar?: FileUploadNullableRelationFilter | null;
  },
  'id' | 'username' | 'email' | 'googleId'
>;

export type UserOrderByWithAggregationInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrderInput;
  password?: SortOrderInput;
  email?: SortOrder;
  roles?: SortOrder;
  googleId?: SortOrderInput;
  googleProfile?: SortOrderInput;
  avatarId?: SortOrderInput;
  _count?: UserCountOrderByAggregateInput;
  _max?: UserMaxOrderByAggregateInput;
  _min?: UserMinOrderByAggregateInput;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: UserScalarWhereWithAggregatesInput[];
  OR?: UserScalarWhereWithAggregatesInput[];
  NOT?: UserScalarWhereWithAggregatesInput[];
  id?: StringWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  username?: StringNullableWithAggregatesFilter | null;
  password?: StringNullableWithAggregatesFilter | null;
  email?: StringWithAggregatesFilter;
  roles?: StringNullableListFilter;
  googleId?: StringNullableWithAggregatesFilter | null;
  googleProfile?: JsonNullableWithAggregatesFilter;
  avatarId?: StringNullableWithAggregatesFilter | null;
};

export type FileUploadWhereInput = {
  AND?: FileUploadWhereInput[];
  OR?: FileUploadWhereInput[];
  NOT?: FileUploadWhereInput[];
  id?: StringFilter;
  type?: StringFilter;
  filePathUrl?: StringFilter;
  thumbnailPathUrl?: StringNullableFilter | null;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  authorId?: StringFilter;
  author?: UserListRelationFilter;
};

export type FileUploadOrderByWithRelationInput = {
  id?: SortOrder;
  type?: SortOrder;
  filePathUrl?: SortOrder;
  thumbnailPathUrl?: SortOrderInput;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  authorId?: SortOrder;
  author?: UserOrderByRelationAggregateInput;
};

export type FileUploadWhereUniqueInput = AtLeast<
  {
    id?: string;
    AND?: FileUploadWhereInput[];
    OR?: FileUploadWhereInput[];
    NOT?: FileUploadWhereInput[];
    type?: StringFilter;
    filePathUrl?: StringFilter;
    thumbnailPathUrl?: StringNullableFilter | null;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    authorId?: StringFilter;
    author?: UserListRelationFilter;
  },
  'id'
>;

export type FileUploadOrderByWithAggregationInput = {
  id?: SortOrder;
  type?: SortOrder;
  filePathUrl?: SortOrder;
  thumbnailPathUrl?: SortOrderInput;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  authorId?: SortOrder;
  _count?: FileUploadCountOrderByAggregateInput;
  _max?: FileUploadMaxOrderByAggregateInput;
  _min?: FileUploadMinOrderByAggregateInput;
};

export type FileUploadScalarWhereWithAggregatesInput = {
  AND?: FileUploadScalarWhereWithAggregatesInput[];
  OR?: FileUploadScalarWhereWithAggregatesInput[];
  NOT?: FileUploadScalarWhereWithAggregatesInput[];
  id?: StringWithAggregatesFilter;
  type?: StringWithAggregatesFilter;
  filePathUrl?: StringWithAggregatesFilter;
  thumbnailPathUrl?: StringNullableWithAggregatesFilter | null;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
  authorId?: StringWithAggregatesFilter;
};

export type PostWhereInput = {
  AND?: PostWhereInput[];
  OR?: PostWhereInput[];
  NOT?: PostWhereInput[];
  id?: StringFilter;
  title?: StringFilter;
  content?: JsonNullableFilter;
  published?: BoolFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  authorId?: StringFilter;
  author?: UserRelationFilter;
};

export type PostOrderByWithRelationInput = {
  id?: SortOrder;
  title?: SortOrder;
  content?: SortOrderInput;
  published?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  authorId?: SortOrder;
  author?: UserOrderByWithRelationInput;
};

export type PostWhereUniqueInput = AtLeast<
  {
    id?: string;
    AND?: PostWhereInput[];
    OR?: PostWhereInput[];
    NOT?: PostWhereInput[];
    title?: StringFilter;
    content?: JsonNullableFilter;
    published?: BoolFilter;
    createdAt?: DateTimeFilter;
    updatedAt?: DateTimeFilter;
    authorId?: StringFilter;
    author?: UserRelationFilter;
  },
  'id'
>;

export type PostOrderByWithAggregationInput = {
  id?: SortOrder;
  title?: SortOrder;
  content?: SortOrderInput;
  published?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  authorId?: SortOrder;
  _count?: PostCountOrderByAggregateInput;
  _max?: PostMaxOrderByAggregateInput;
  _min?: PostMinOrderByAggregateInput;
};

export type PostScalarWhereWithAggregatesInput = {
  AND?: PostScalarWhereWithAggregatesInput[];
  OR?: PostScalarWhereWithAggregatesInput[];
  NOT?: PostScalarWhereWithAggregatesInput[];
  id?: StringWithAggregatesFilter;
  title?: StringWithAggregatesFilter;
  content?: JsonNullableWithAggregatesFilter;
  published?: BoolWithAggregatesFilter;
  createdAt?: DateTimeWithAggregatesFilter;
  updatedAt?: DateTimeWithAggregatesFilter;
  authorId?: StringWithAggregatesFilter;
};

export type UserCreateInput = {
  id?: string;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: string[];
  googleId?: string | null;
  googleProfile?: any;
  Post?: PostCreateNestedManyWithoutAuthorInput;
  avatar?: FileUploadCreateNestedOneWithoutAuthorInput;
};

export type UserUncheckedCreateInput = {
  id?: string;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: string[];
  googleId?: string | null;
  googleProfile?: any;
  avatarId?: string | null;
  Post?: PostUncheckedCreateNestedManyWithoutAuthorInput;
};

export type UserUpdateInput = {
  id?: string;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: string[];
  googleId?: string | null;
  googleProfile?: any;
  Post?: PostUpdateManyWithoutAuthorNestedInput;
  avatar?: FileUploadUpdateOneWithoutAuthorNestedInput;
};

export type UserUncheckedUpdateInput = {
  id?: string;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: string[];
  googleId?: string | null;
  googleProfile?: any;
  avatarId?: string | null;
  Post?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
};

export type UserCreateManyInput = {
  id?: string;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: string[];
  googleId?: string | null;
  googleProfile?: any;
  avatarId?: string | null;
};

export type UserUpdateManyMutationInput = {
  id?: string;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: string[];
  googleId?: string | null;
  googleProfile?: any;
};

export type UserUncheckedUpdateManyInput = {
  id?: string;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: string[];
  googleId?: string | null;
  googleProfile?: any;
  avatarId?: string | null;
};

export type FileUploadCreateInput = {
  id?: string;
  type: string;
  filePathUrl: string;
  thumbnailPathUrl?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  authorId: string;
  author?: UserCreateNestedManyWithoutAvatarInput;
};

export type FileUploadUncheckedCreateInput = {
  id?: string;
  type: string;
  filePathUrl: string;
  thumbnailPathUrl?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  authorId: string;
  author?: UserUncheckedCreateNestedManyWithoutAvatarInput;
};

export type FileUploadUpdateInput = {
  id?: string;
  type?: string;
  filePathUrl?: string;
  thumbnailPathUrl?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  authorId?: string;
  author?: UserUpdateManyWithoutAvatarNestedInput;
};

export type FileUploadUncheckedUpdateInput = {
  id?: string;
  type?: string;
  filePathUrl?: string;
  thumbnailPathUrl?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  authorId?: string;
  author?: UserUncheckedUpdateManyWithoutAvatarNestedInput;
};

export type FileUploadCreateManyInput = {
  id?: string;
  type: string;
  filePathUrl: string;
  thumbnailPathUrl?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  authorId: string;
};

export type FileUploadUpdateManyMutationInput = {
  id?: string;
  type?: string;
  filePathUrl?: string;
  thumbnailPathUrl?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  authorId?: string;
};

export type FileUploadUncheckedUpdateManyInput = {
  id?: string;
  type?: string;
  filePathUrl?: string;
  thumbnailPathUrl?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  authorId?: string;
};

export type PostCreateInput = {
  id?: string;
  title: string;
  content?: any;
  published?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  author: UserCreateNestedOneWithoutPostInput;
};

export type PostUncheckedCreateInput = {
  id?: string;
  title: string;
  content?: any;
  published?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  authorId: string;
};

export type PostUpdateInput = {
  id?: string;
  title?: string;
  content?: any;
  published?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  author?: UserUpdateOneRequiredWithoutPostNestedInput;
};

export type PostUncheckedUpdateInput = {
  id?: string;
  title?: string;
  content?: any;
  published?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  authorId?: string;
};

export type PostCreateManyInput = {
  id?: string;
  title: string;
  content?: any;
  published?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  authorId: string;
};

export type PostUpdateManyMutationInput = {
  id?: string;
  title?: string;
  content?: any;
  published?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type PostUncheckedUpdateManyInput = {
  id?: string;
  title?: string;
  content?: any;
  published?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  authorId?: string;
};

export type StringFilter = {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringFilter;
};

export type DateTimeFilter = {
  equals?: Date;
  in?: Date[];
  notIn?: Date[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeFilter;
};

export type StringNullableFilter = {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringNullableFilter | null;
};

export type StringNullableListFilter = {
  equals?: string[] | null;
  has?: string | null;
  hasEvery?: string[];
  hasSome?: string[];
  isEmpty?: boolean;
};

export type JsonNullableFilter = {
  equals?: any;
  path?: string[];
  string_contains?: string;
  string_starts_with?: string;
  string_ends_with?: string;
  array_contains?: any | null;
  array_starts_with?: any | null;
  array_ends_with?: any | null;
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
  not?: any;
};

export type PostListRelationFilter = {
  every?: PostWhereInput;
  some?: PostWhereInput;
  none?: PostWhereInput;
};

export type FileUploadNullableRelationFilter = {
  is?: FileUploadWhereInput | null;
  isNot?: FileUploadWhereInput | null;
};

export type SortOrderInput = {
  sort: SortOrder;
  nulls?: NullsOrder;
};

export type PostOrderByRelationAggregateInput = {
  _count?: SortOrder;
};

export type UserCountOrderByAggregateInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
  roles?: SortOrder;
  googleId?: SortOrder;
  googleProfile?: SortOrder;
  avatarId?: SortOrder;
};

export type UserMaxOrderByAggregateInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
  googleId?: SortOrder;
  avatarId?: SortOrder;
};

export type UserMinOrderByAggregateInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  email?: SortOrder;
  googleId?: SortOrder;
  avatarId?: SortOrder;
};

export type StringWithAggregatesFilter = {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedStringFilter;
  _max?: NestedStringFilter;
};

export type DateTimeWithAggregatesFilter = {
  equals?: Date;
  in?: Date[];
  notIn?: Date[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedDateTimeFilter;
  _max?: NestedDateTimeFilter;
};

export type StringNullableWithAggregatesFilter = {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: QueryMode;
  not?: NestedStringNullableWithAggregatesFilter | null;
  _count?: NestedIntNullableFilter;
  _min?: NestedStringNullableFilter;
  _max?: NestedStringNullableFilter;
};

export type JsonNullableWithAggregatesFilter = {
  equals?: any;
  path?: string[];
  string_contains?: string;
  string_starts_with?: string;
  string_ends_with?: string;
  array_contains?: any | null;
  array_starts_with?: any | null;
  array_ends_with?: any | null;
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
  not?: any;
  _count?: NestedIntNullableFilter;
  _min?: NestedJsonNullableFilter;
  _max?: NestedJsonNullableFilter;
};

export type UserListRelationFilter = {
  every?: UserWhereInput;
  some?: UserWhereInput;
  none?: UserWhereInput;
};

export type UserOrderByRelationAggregateInput = {
  _count?: SortOrder;
};

export type FileUploadCountOrderByAggregateInput = {
  id?: SortOrder;
  type?: SortOrder;
  filePathUrl?: SortOrder;
  thumbnailPathUrl?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  authorId?: SortOrder;
};

export type FileUploadMaxOrderByAggregateInput = {
  id?: SortOrder;
  type?: SortOrder;
  filePathUrl?: SortOrder;
  thumbnailPathUrl?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  authorId?: SortOrder;
};

export type FileUploadMinOrderByAggregateInput = {
  id?: SortOrder;
  type?: SortOrder;
  filePathUrl?: SortOrder;
  thumbnailPathUrl?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  authorId?: SortOrder;
};

export type BoolFilter = {
  equals?: boolean;
  not?: NestedBoolFilter;
};

export type UserRelationFilter = {
  is?: UserWhereInput;
  isNot?: UserWhereInput;
};

export type PostCountOrderByAggregateInput = {
  id?: SortOrder;
  title?: SortOrder;
  content?: SortOrder;
  published?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  authorId?: SortOrder;
};

export type PostMaxOrderByAggregateInput = {
  id?: SortOrder;
  title?: SortOrder;
  published?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  authorId?: SortOrder;
};

export type PostMinOrderByAggregateInput = {
  id?: SortOrder;
  title?: SortOrder;
  published?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  authorId?: SortOrder;
};

export type BoolWithAggregatesFilter = {
  equals?: boolean;
  not?: NestedBoolWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedBoolFilter;
  _max?: NestedBoolFilter;
};

export type UserCreaterolesInput = {
  set: string[];
};

export type PostCreateNestedManyWithoutAuthorInput = {
  create?: PostCreateWithoutAuthorInput[];
  connectOrCreate?: PostCreateOrConnectWithoutAuthorInput[];
  createMany?: PostCreateManyAuthorInputEnvelope;
  connect?: PostWhereUniqueInput[];
};

export type FileUploadCreateNestedOneWithoutAuthorInput = {
  create?: FileUploadCreateWithoutAuthorInput;
  connectOrCreate?: FileUploadCreateOrConnectWithoutAuthorInput;
  connect?: FileUploadWhereUniqueInput;
};

export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
  create?: PostCreateWithoutAuthorInput[];
  connectOrCreate?: PostCreateOrConnectWithoutAuthorInput[];
  createMany?: PostCreateManyAuthorInputEnvelope;
  connect?: PostWhereUniqueInput[];
};

export type StringFieldUpdateOperationsInput = {
  set?: string;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Date;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: string | null;
};

export type UserUpdaterolesInput = {
  set?: string[];
  push?: string[];
};

export type PostUpdateManyWithoutAuthorNestedInput = {
  create?: PostCreateWithoutAuthorInput[];
  connectOrCreate?: PostCreateOrConnectWithoutAuthorInput[];
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[];
  createMany?: PostCreateManyAuthorInputEnvelope;
  set?: PostWhereUniqueInput[];
  disconnect?: PostWhereUniqueInput[];
  delete?: PostWhereUniqueInput[];
  connect?: PostWhereUniqueInput[];
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[];
  updateMany?: PostUpdateManyWithWhereWithoutAuthorInput[];
  deleteMany?: PostScalarWhereInput[];
};

export type FileUploadUpdateOneWithoutAuthorNestedInput = {
  create?: FileUploadCreateWithoutAuthorInput;
  connectOrCreate?: FileUploadCreateOrConnectWithoutAuthorInput;
  upsert?: FileUploadUpsertWithoutAuthorInput;
  disconnect?: FileUploadWhereInput;
  delete?: FileUploadWhereInput;
  connect?: FileUploadWhereUniqueInput;
  update?: FileUploadUpdateToOneWithWhereWithoutAuthorInput;
};

export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
  create?: PostCreateWithoutAuthorInput[];
  connectOrCreate?: PostCreateOrConnectWithoutAuthorInput[];
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[];
  createMany?: PostCreateManyAuthorInputEnvelope;
  set?: PostWhereUniqueInput[];
  disconnect?: PostWhereUniqueInput[];
  delete?: PostWhereUniqueInput[];
  connect?: PostWhereUniqueInput[];
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[];
  updateMany?: PostUpdateManyWithWhereWithoutAuthorInput[];
  deleteMany?: PostScalarWhereInput[];
};

export type UserCreateNestedManyWithoutAvatarInput = {
  create?: UserCreateWithoutAvatarInput[];
  connectOrCreate?: UserCreateOrConnectWithoutAvatarInput[];
  createMany?: UserCreateManyAvatarInputEnvelope;
  connect?: UserWhereUniqueInput[];
};

export type UserUncheckedCreateNestedManyWithoutAvatarInput = {
  create?: UserCreateWithoutAvatarInput[];
  connectOrCreate?: UserCreateOrConnectWithoutAvatarInput[];
  createMany?: UserCreateManyAvatarInputEnvelope;
  connect?: UserWhereUniqueInput[];
};

export type UserUpdateManyWithoutAvatarNestedInput = {
  create?: UserCreateWithoutAvatarInput[];
  connectOrCreate?: UserCreateOrConnectWithoutAvatarInput[];
  upsert?: UserUpsertWithWhereUniqueWithoutAvatarInput[];
  createMany?: UserCreateManyAvatarInputEnvelope;
  set?: UserWhereUniqueInput[];
  disconnect?: UserWhereUniqueInput[];
  delete?: UserWhereUniqueInput[];
  connect?: UserWhereUniqueInput[];
  update?: UserUpdateWithWhereUniqueWithoutAvatarInput[];
  updateMany?: UserUpdateManyWithWhereWithoutAvatarInput[];
  deleteMany?: UserScalarWhereInput[];
};

export type UserUncheckedUpdateManyWithoutAvatarNestedInput = {
  create?: UserCreateWithoutAvatarInput[];
  connectOrCreate?: UserCreateOrConnectWithoutAvatarInput[];
  upsert?: UserUpsertWithWhereUniqueWithoutAvatarInput[];
  createMany?: UserCreateManyAvatarInputEnvelope;
  set?: UserWhereUniqueInput[];
  disconnect?: UserWhereUniqueInput[];
  delete?: UserWhereUniqueInput[];
  connect?: UserWhereUniqueInput[];
  update?: UserUpdateWithWhereUniqueWithoutAvatarInput[];
  updateMany?: UserUpdateManyWithWhereWithoutAvatarInput[];
  deleteMany?: UserScalarWhereInput[];
};

export type UserCreateNestedOneWithoutPostInput = {
  create?: UserCreateWithoutPostInput;
  connectOrCreate?: UserCreateOrConnectWithoutPostInput;
  connect?: UserWhereUniqueInput;
};

export type BoolFieldUpdateOperationsInput = {
  set?: boolean;
};

export type UserUpdateOneRequiredWithoutPostNestedInput = {
  create?: UserCreateWithoutPostInput;
  connectOrCreate?: UserCreateOrConnectWithoutPostInput;
  upsert?: UserUpsertWithoutPostInput;
  connect?: UserWhereUniqueInput;
  update?: UserUpdateToOneWithWhereWithoutPostInput;
};

export type NestedStringFilter = {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringFilter;
};

export type NestedDateTimeFilter = {
  equals?: Date;
  in?: Date[];
  notIn?: Date[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeFilter;
};

export type NestedStringNullableFilter = {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringNullableFilter | null;
};

export type NestedStringWithAggregatesFilter = {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedStringFilter;
  _max?: NestedStringFilter;
};

export type NestedIntFilter = {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntFilter;
};

export type NestedDateTimeWithAggregatesFilter = {
  equals?: Date;
  in?: Date[];
  notIn?: Date[];
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
  not?: NestedDateTimeWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedDateTimeFilter;
  _max?: NestedDateTimeFilter;
};

export type NestedStringNullableWithAggregatesFilter = {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  not?: NestedStringNullableWithAggregatesFilter | null;
  _count?: NestedIntNullableFilter;
  _min?: NestedStringNullableFilter;
  _max?: NestedStringNullableFilter;
};

export type NestedIntNullableFilter = {
  equals?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntNullableFilter | null;
};

export type NestedJsonNullableFilter = {
  equals?: any;
  path?: string[];
  string_contains?: string;
  string_starts_with?: string;
  string_ends_with?: string;
  array_contains?: any | null;
  array_starts_with?: any | null;
  array_ends_with?: any | null;
  lt?: any;
  lte?: any;
  gt?: any;
  gte?: any;
  not?: any;
};

export type NestedBoolFilter = {
  equals?: boolean;
  not?: NestedBoolFilter;
};

export type NestedBoolWithAggregatesFilter = {
  equals?: boolean;
  not?: NestedBoolWithAggregatesFilter;
  _count?: NestedIntFilter;
  _min?: NestedBoolFilter;
  _max?: NestedBoolFilter;
};

export type PostCreateWithoutAuthorInput = {
  id?: string;
  title: string;
  content?: any;
  published?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type PostUncheckedCreateWithoutAuthorInput = {
  id?: string;
  title: string;
  content?: any;
  published?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type PostCreateOrConnectWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  create: PostCreateWithoutAuthorInput;
};

export type PostCreateManyAuthorInputEnvelope = {
  data: PostCreateManyAuthorInput[];
  skipDuplicates?: boolean;
};

export type FileUploadCreateWithoutAuthorInput = {
  id?: string;
  type: string;
  filePathUrl: string;
  thumbnailPathUrl?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  authorId: string;
};

export type FileUploadUncheckedCreateWithoutAuthorInput = {
  id?: string;
  type: string;
  filePathUrl: string;
  thumbnailPathUrl?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  authorId: string;
};

export type FileUploadCreateOrConnectWithoutAuthorInput = {
  where: FileUploadWhereUniqueInput;
  create: FileUploadCreateWithoutAuthorInput;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutAuthorInput;
  create: PostCreateWithoutAuthorInput;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutAuthorInput;
};

export type PostUpdateManyWithWhereWithoutAuthorInput = {
  where: PostScalarWhereInput;
  data: PostUpdateManyMutationInput;
};

export type PostScalarWhereInput = {
  AND?: PostScalarWhereInput[];
  OR?: PostScalarWhereInput[];
  NOT?: PostScalarWhereInput[];
  id?: StringFilter;
  title?: StringFilter;
  content?: JsonNullableFilter;
  published?: BoolFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  authorId?: StringFilter;
};

export type FileUploadUpsertWithoutAuthorInput = {
  update: FileUploadUpdateWithoutAuthorInput;
  create: FileUploadCreateWithoutAuthorInput;
  where?: FileUploadWhereInput;
};

export type FileUploadUpdateToOneWithWhereWithoutAuthorInput = {
  where?: FileUploadWhereInput;
  data: FileUploadUpdateWithoutAuthorInput;
};

export type FileUploadUpdateWithoutAuthorInput = {
  id?: string;
  type?: string;
  filePathUrl?: string;
  thumbnailPathUrl?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  authorId?: string;
};

export type FileUploadUncheckedUpdateWithoutAuthorInput = {
  id?: string;
  type?: string;
  filePathUrl?: string;
  thumbnailPathUrl?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  authorId?: string;
};

export type UserCreateWithoutAvatarInput = {
  id?: string;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: string[];
  googleId?: string | null;
  googleProfile?: any;
  Post?: PostCreateNestedManyWithoutAuthorInput;
};

export type UserUncheckedCreateWithoutAvatarInput = {
  id?: string;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: string[];
  googleId?: string | null;
  googleProfile?: any;
  Post?: PostUncheckedCreateNestedManyWithoutAuthorInput;
};

export type UserCreateOrConnectWithoutAvatarInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutAvatarInput;
};

export type UserCreateManyAvatarInputEnvelope = {
  data: UserCreateManyAvatarInput[];
  skipDuplicates?: boolean;
};

export type UserUpsertWithWhereUniqueWithoutAvatarInput = {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutAvatarInput;
  create: UserCreateWithoutAvatarInput;
};

export type UserUpdateWithWhereUniqueWithoutAvatarInput = {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutAvatarInput;
};

export type UserUpdateManyWithWhereWithoutAvatarInput = {
  where: UserScalarWhereInput;
  data: UserUpdateManyMutationInput;
};

export type UserScalarWhereInput = {
  AND?: UserScalarWhereInput[];
  OR?: UserScalarWhereInput[];
  NOT?: UserScalarWhereInput[];
  id?: StringFilter;
  createdAt?: DateTimeFilter;
  username?: StringNullableFilter | null;
  password?: StringNullableFilter | null;
  email?: StringFilter;
  roles?: StringNullableListFilter;
  googleId?: StringNullableFilter | null;
  googleProfile?: JsonNullableFilter;
  avatarId?: StringNullableFilter | null;
};

export type UserCreateWithoutPostInput = {
  id?: string;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: string[];
  googleId?: string | null;
  googleProfile?: any;
  avatar?: FileUploadCreateNestedOneWithoutAuthorInput;
};

export type UserUncheckedCreateWithoutPostInput = {
  id?: string;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: string[];
  googleId?: string | null;
  googleProfile?: any;
  avatarId?: string | null;
};

export type UserCreateOrConnectWithoutPostInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutPostInput;
};

export type UserUpsertWithoutPostInput = {
  update: UserUpdateWithoutPostInput;
  create: UserCreateWithoutPostInput;
  where?: UserWhereInput;
};

export type UserUpdateToOneWithWhereWithoutPostInput = {
  where?: UserWhereInput;
  data: UserUpdateWithoutPostInput;
};

export type UserUpdateWithoutPostInput = {
  id?: string;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: string[];
  googleId?: string | null;
  googleProfile?: any;
  avatar?: FileUploadUpdateOneWithoutAuthorNestedInput;
};

export type UserUncheckedUpdateWithoutPostInput = {
  id?: string;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: string[];
  googleId?: string | null;
  googleProfile?: any;
  avatarId?: string | null;
};

export type PostCreateManyAuthorInput = {
  id?: string;
  title: string;
  content?: any;
  published?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type PostUpdateWithoutAuthorInput = {
  id?: string;
  title?: string;
  content?: any;
  published?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type PostUncheckedUpdateWithoutAuthorInput = {
  id?: string;
  title?: string;
  content?: any;
  published?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type PostUncheckedUpdateManyWithoutAuthorInput = {
  id?: string;
  title?: string;
  content?: any;
  published?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type UserCreateManyAvatarInput = {
  id?: string;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email: string;
  roles?: string[];
  googleId?: string | null;
  googleProfile?: any;
};

export type UserUpdateWithoutAvatarInput = {
  id?: string;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: string[];
  googleId?: string | null;
  googleProfile?: any;
  Post?: PostUpdateManyWithoutAuthorNestedInput;
};

export type UserUncheckedUpdateWithoutAvatarInput = {
  id?: string;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: string[];
  googleId?: string | null;
  googleProfile?: any;
  Post?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
};

export type UserUncheckedUpdateManyWithoutAvatarInput = {
  id?: string;
  createdAt?: Date;
  username?: string | null;
  password?: string | null;
  email?: string;
  roles?: string[];
  googleId?: string | null;
  googleProfile?: any;
};

export enum TransactionIsolationLevel {
  ReadUncommitted = 'ReadUncommitted',
  ReadCommitted = 'ReadCommitted',
  RepeatableRead = 'RepeatableRead',
  Serializable = 'Serializable',
}
export enum UserScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  username = 'username',
  password = 'password',
  email = 'email',
  roles = 'roles',
  googleId = 'googleId',
  googleProfile = 'googleProfile',
  avatarId = 'avatarId',
}
export enum FileUploadScalarFieldEnum {
  id = 'id',
  type = 'type',
  filePathUrl = 'filePathUrl',
  thumbnailPathUrl = 'thumbnailPathUrl',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  authorId = 'authorId',
}
export enum PostScalarFieldEnum {
  id = 'id',
  title = 'title',
  content = 'content',
  published = 'published',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  authorId = 'authorId',
}
export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}
export enum NullableJsonNullValueInput {
  DbNull = 'DbNull',
  JsonNull = 'JsonNull',
}
export enum QueryMode {
  default = 'default',
  insensitive = 'insensitive',
}
export enum JsonNullValueFilter {
  DbNull = 'DbNull',
  JsonNull = 'JsonNull',
  AnyNull = 'AnyNull',
}
export enum NullsOrder {
  first = 'first',
  last = 'last',
}
