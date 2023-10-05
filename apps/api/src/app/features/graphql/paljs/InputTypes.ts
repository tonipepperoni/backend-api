import gql from 'graphql-tag';

export default gql`
  scalar DateTime
  type BatchPayload {
    count: Int!
  }

  enum TransactionIsolationLevel {
    ReadUncommitted
    ReadCommitted
    RepeatableRead
    Serializable
  }

  enum UserScalarFieldEnum {
    id
    createdAt
    username
    password
    email
    roles
    googleId
    googleProfile
    avatarId
  }

  enum FileUploadScalarFieldEnum {
    id
    type
    filePathUrl
    thumbnailPathUrl
    createdAt
    updatedAt
    authorId
  }

  enum PostScalarFieldEnum {
    id
    title
    content
    published
    createdAt
    updatedAt
    authorId
  }

  enum SortOrder {
    asc
    desc
  }

  enum NullableJsonNullValueInput {
    DbNull
    JsonNull
  }

  enum QueryMode {
    default
    insensitive
  }

  enum JsonNullValueFilter {
    DbNull
    JsonNull
    AnyNull
  }

  enum NullsOrder {
    first
    last
  }

  input UserWhereInput {
    AND: [UserWhereInput!]
    OR: [UserWhereInput!]
    NOT: [UserWhereInput!]
    id: StringFilter
    createdAt: DateTimeFilter
    username: StringNullableFilter
    password: StringNullableFilter
    email: StringFilter
    roles: StringNullableListFilter
    googleId: StringNullableFilter
    googleProfile: JsonNullableFilter
    avatarId: StringNullableFilter
    Post: PostListRelationFilter
    avatar: FileUploadNullableRelationFilter
  }

  input UserOrderByWithRelationInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrderInput
    password: SortOrderInput
    email: SortOrder
    roles: SortOrder
    googleId: SortOrderInput
    googleProfile: SortOrderInput
    avatarId: SortOrderInput
    Post: PostOrderByRelationAggregateInput
    avatar: FileUploadOrderByWithRelationInput
  }

  input UserWhereUniqueInput {
    id: String
    username: String
    email: String
    googleId: String
    AND: [UserWhereInput!]
    OR: [UserWhereInput!]
    NOT: [UserWhereInput!]
    createdAt: DateTimeFilter
    password: StringNullableFilter
    roles: StringNullableListFilter
    googleProfile: JsonNullableFilter
    avatarId: StringNullableFilter
    Post: PostListRelationFilter
    avatar: FileUploadNullableRelationFilter
  }

  input UserOrderByWithAggregationInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrderInput
    password: SortOrderInput
    email: SortOrder
    roles: SortOrder
    googleId: SortOrderInput
    googleProfile: SortOrderInput
    avatarId: SortOrderInput
    _count: UserCountOrderByAggregateInput
    _max: UserMaxOrderByAggregateInput
    _min: UserMinOrderByAggregateInput
  }

  input UserScalarWhereWithAggregatesInput {
    AND: [UserScalarWhereWithAggregatesInput!]
    OR: [UserScalarWhereWithAggregatesInput!]
    NOT: [UserScalarWhereWithAggregatesInput!]
    id: StringWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    username: StringNullableWithAggregatesFilter
    password: StringNullableWithAggregatesFilter
    email: StringWithAggregatesFilter
    roles: StringNullableListFilter
    googleId: StringNullableWithAggregatesFilter
    googleProfile: JsonNullableWithAggregatesFilter
    avatarId: StringNullableWithAggregatesFilter
  }

  input FileUploadWhereInput {
    AND: [FileUploadWhereInput!]
    OR: [FileUploadWhereInput!]
    NOT: [FileUploadWhereInput!]
    id: StringFilter
    type: StringFilter
    filePathUrl: StringFilter
    thumbnailPathUrl: StringNullableFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    authorId: StringFilter
    author: UserListRelationFilter
  }

  input FileUploadOrderByWithRelationInput {
    id: SortOrder
    type: SortOrder
    filePathUrl: SortOrder
    thumbnailPathUrl: SortOrderInput
    createdAt: SortOrder
    updatedAt: SortOrder
    authorId: SortOrder
    author: UserOrderByRelationAggregateInput
  }

  input FileUploadWhereUniqueInput {
    id: String
    AND: [FileUploadWhereInput!]
    OR: [FileUploadWhereInput!]
    NOT: [FileUploadWhereInput!]
    type: StringFilter
    filePathUrl: StringFilter
    thumbnailPathUrl: StringNullableFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    authorId: StringFilter
    author: UserListRelationFilter
  }

  input FileUploadOrderByWithAggregationInput {
    id: SortOrder
    type: SortOrder
    filePathUrl: SortOrder
    thumbnailPathUrl: SortOrderInput
    createdAt: SortOrder
    updatedAt: SortOrder
    authorId: SortOrder
    _count: FileUploadCountOrderByAggregateInput
    _max: FileUploadMaxOrderByAggregateInput
    _min: FileUploadMinOrderByAggregateInput
  }

  input FileUploadScalarWhereWithAggregatesInput {
    AND: [FileUploadScalarWhereWithAggregatesInput!]
    OR: [FileUploadScalarWhereWithAggregatesInput!]
    NOT: [FileUploadScalarWhereWithAggregatesInput!]
    id: StringWithAggregatesFilter
    type: StringWithAggregatesFilter
    filePathUrl: StringWithAggregatesFilter
    thumbnailPathUrl: StringNullableWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    updatedAt: DateTimeWithAggregatesFilter
    authorId: StringWithAggregatesFilter
  }

  input PostWhereInput {
    AND: [PostWhereInput!]
    OR: [PostWhereInput!]
    NOT: [PostWhereInput!]
    id: StringFilter
    title: StringFilter
    content: JsonNullableFilter
    published: BoolFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    authorId: StringFilter
    author: UserRelationFilter
  }

  input PostOrderByWithRelationInput {
    id: SortOrder
    title: SortOrder
    content: SortOrderInput
    published: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    authorId: SortOrder
    author: UserOrderByWithRelationInput
  }

  input PostWhereUniqueInput {
    id: String
    AND: [PostWhereInput!]
    OR: [PostWhereInput!]
    NOT: [PostWhereInput!]
    title: StringFilter
    content: JsonNullableFilter
    published: BoolFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    authorId: StringFilter
    author: UserRelationFilter
  }

  input PostOrderByWithAggregationInput {
    id: SortOrder
    title: SortOrder
    content: SortOrderInput
    published: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    authorId: SortOrder
    _count: PostCountOrderByAggregateInput
    _max: PostMaxOrderByAggregateInput
    _min: PostMinOrderByAggregateInput
  }

  input PostScalarWhereWithAggregatesInput {
    AND: [PostScalarWhereWithAggregatesInput!]
    OR: [PostScalarWhereWithAggregatesInput!]
    NOT: [PostScalarWhereWithAggregatesInput!]
    id: StringWithAggregatesFilter
    title: StringWithAggregatesFilter
    content: JsonNullableWithAggregatesFilter
    published: BoolWithAggregatesFilter
    createdAt: DateTimeWithAggregatesFilter
    updatedAt: DateTimeWithAggregatesFilter
    authorId: StringWithAggregatesFilter
  }

  input UserCreateInput {
    id: String
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    Post: PostCreateNestedManyWithoutAuthorInput
    avatar: FileUploadCreateNestedOneWithoutAuthorInput
  }

  input UserUncheckedCreateInput {
    id: String
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    avatarId: String
    Post: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  input UserUpdateInput {
    id: String
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    Post: PostUpdateManyWithoutAuthorNestedInput
    avatar: FileUploadUpdateOneWithoutAuthorNestedInput
  }

  input UserUncheckedUpdateInput {
    id: String
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    avatarId: String
    Post: PostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  input UserCreateManyInput {
    id: String
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    avatarId: String
  }

  input UserUpdateManyMutationInput {
    id: String
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
  }

  input UserUncheckedUpdateManyInput {
    id: String
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    avatarId: String
  }

  input FileUploadCreateInput {
    id: String
    type: String!
    filePathUrl: String!
    thumbnailPathUrl: String
    createdAt: DateTime
    updatedAt: DateTime
    authorId: String!
    author: UserCreateNestedManyWithoutAvatarInput
  }

  input FileUploadUncheckedCreateInput {
    id: String
    type: String!
    filePathUrl: String!
    thumbnailPathUrl: String
    createdAt: DateTime
    updatedAt: DateTime
    authorId: String!
    author: UserUncheckedCreateNestedManyWithoutAvatarInput
  }

  input FileUploadUpdateInput {
    id: String
    type: String
    filePathUrl: String
    thumbnailPathUrl: String
    createdAt: DateTime
    updatedAt: DateTime
    authorId: String
    author: UserUpdateManyWithoutAvatarNestedInput
  }

  input FileUploadUncheckedUpdateInput {
    id: String
    type: String
    filePathUrl: String
    thumbnailPathUrl: String
    createdAt: DateTime
    updatedAt: DateTime
    authorId: String
    author: UserUncheckedUpdateManyWithoutAvatarNestedInput
  }

  input FileUploadCreateManyInput {
    id: String
    type: String!
    filePathUrl: String!
    thumbnailPathUrl: String
    createdAt: DateTime
    updatedAt: DateTime
    authorId: String!
  }

  input FileUploadUpdateManyMutationInput {
    id: String
    type: String
    filePathUrl: String
    thumbnailPathUrl: String
    createdAt: DateTime
    updatedAt: DateTime
    authorId: String
  }

  input FileUploadUncheckedUpdateManyInput {
    id: String
    type: String
    filePathUrl: String
    thumbnailPathUrl: String
    createdAt: DateTime
    updatedAt: DateTime
    authorId: String
  }

  input PostCreateInput {
    id: String
    title: String!
    content: Json
    published: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    author: UserCreateNestedOneWithoutPostInput!
  }

  input PostUncheckedCreateInput {
    id: String
    title: String!
    content: Json
    published: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    authorId: String!
  }

  input PostUpdateInput {
    id: String
    title: String
    content: Json
    published: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    author: UserUpdateOneRequiredWithoutPostNestedInput
  }

  input PostUncheckedUpdateInput {
    id: String
    title: String
    content: Json
    published: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    authorId: String
  }

  input PostCreateManyInput {
    id: String
    title: String!
    content: Json
    published: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    authorId: String!
  }

  input PostUpdateManyMutationInput {
    id: String
    title: String
    content: Json
    published: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  input PostUncheckedUpdateManyInput {
    id: String
    title: String
    content: Json
    published: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    authorId: String
  }

  input StringFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringFilter
  }

  input DateTimeFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeFilter
  }

  input StringNullableFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringNullableFilter
  }

  input StringNullableListFilter {
    equals: [String!]
    has: String
    hasEvery: [String!]
    hasSome: [String!]
    isEmpty: Boolean
  }

  input JsonNullableFilter {
    equals: Json
    path: [String!]
    string_contains: String
    string_starts_with: String
    string_ends_with: String
    array_contains: Json
    array_starts_with: Json
    array_ends_with: Json
    lt: Json
    lte: Json
    gt: Json
    gte: Json
    not: Json
  }

  input PostListRelationFilter {
    every: PostWhereInput
    some: PostWhereInput
    none: PostWhereInput
  }

  input FileUploadNullableRelationFilter {
    is: FileUploadWhereInput
    isNot: FileUploadWhereInput
  }

  input SortOrderInput {
    sort: SortOrder!
    nulls: NullsOrder
  }

  input PostOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input UserCountOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    roles: SortOrder
    googleId: SortOrder
    googleProfile: SortOrder
    avatarId: SortOrder
  }

  input UserMaxOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    googleId: SortOrder
    avatarId: SortOrder
  }

  input UserMinOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    googleId: SortOrder
    avatarId: SortOrder
  }

  input StringWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedStringFilter
    _max: NestedStringFilter
  }

  input DateTimeWithAggregatesFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedDateTimeFilter
    _max: NestedDateTimeFilter
  }

  input StringNullableWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    mode: QueryMode
    not: NestedStringNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedStringNullableFilter
    _max: NestedStringNullableFilter
  }

  input JsonNullableWithAggregatesFilter {
    equals: Json
    path: [String!]
    string_contains: String
    string_starts_with: String
    string_ends_with: String
    array_contains: Json
    array_starts_with: Json
    array_ends_with: Json
    lt: Json
    lte: Json
    gt: Json
    gte: Json
    not: Json
    _count: NestedIntNullableFilter
    _min: NestedJsonNullableFilter
    _max: NestedJsonNullableFilter
  }

  input UserListRelationFilter {
    every: UserWhereInput
    some: UserWhereInput
    none: UserWhereInput
  }

  input UserOrderByRelationAggregateInput {
    _count: SortOrder
  }

  input FileUploadCountOrderByAggregateInput {
    id: SortOrder
    type: SortOrder
    filePathUrl: SortOrder
    thumbnailPathUrl: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    authorId: SortOrder
  }

  input FileUploadMaxOrderByAggregateInput {
    id: SortOrder
    type: SortOrder
    filePathUrl: SortOrder
    thumbnailPathUrl: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    authorId: SortOrder
  }

  input FileUploadMinOrderByAggregateInput {
    id: SortOrder
    type: SortOrder
    filePathUrl: SortOrder
    thumbnailPathUrl: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    authorId: SortOrder
  }

  input BoolFilter {
    equals: Boolean
    not: NestedBoolFilter
  }

  input UserRelationFilter {
    is: UserWhereInput
    isNot: UserWhereInput
  }

  input PostCountOrderByAggregateInput {
    id: SortOrder
    title: SortOrder
    content: SortOrder
    published: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    authorId: SortOrder
  }

  input PostMaxOrderByAggregateInput {
    id: SortOrder
    title: SortOrder
    published: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    authorId: SortOrder
  }

  input PostMinOrderByAggregateInput {
    id: SortOrder
    title: SortOrder
    published: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
    authorId: SortOrder
  }

  input BoolWithAggregatesFilter {
    equals: Boolean
    not: NestedBoolWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedBoolFilter
    _max: NestedBoolFilter
  }

  input UserCreaterolesInput {
    set: [String!]!
  }

  input PostCreateNestedManyWithoutAuthorInput {
    create: [PostCreateWithoutAuthorInput!]
    connectOrCreate: [PostCreateOrConnectWithoutAuthorInput!]
    createMany: PostCreateManyAuthorInputEnvelope
    connect: [PostWhereUniqueInput!]
  }

  input FileUploadCreateNestedOneWithoutAuthorInput {
    create: FileUploadCreateWithoutAuthorInput
    connectOrCreate: FileUploadCreateOrConnectWithoutAuthorInput
    connect: FileUploadWhereUniqueInput
  }

  input PostUncheckedCreateNestedManyWithoutAuthorInput {
    create: [PostCreateWithoutAuthorInput!]
    connectOrCreate: [PostCreateOrConnectWithoutAuthorInput!]
    createMany: PostCreateManyAuthorInputEnvelope
    connect: [PostWhereUniqueInput!]
  }

  input StringFieldUpdateOperationsInput {
    set: String
  }

  input DateTimeFieldUpdateOperationsInput {
    set: DateTime
  }

  input NullableStringFieldUpdateOperationsInput {
    set: String
  }

  input UserUpdaterolesInput {
    set: [String!]
    push: [String!]
  }

  input PostUpdateManyWithoutAuthorNestedInput {
    create: [PostCreateWithoutAuthorInput!]
    connectOrCreate: [PostCreateOrConnectWithoutAuthorInput!]
    upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
    createMany: PostCreateManyAuthorInputEnvelope
    set: [PostWhereUniqueInput!]
    disconnect: [PostWhereUniqueInput!]
    delete: [PostWhereUniqueInput!]
    connect: [PostWhereUniqueInput!]
    update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
    updateMany: [PostUpdateManyWithWhereWithoutAuthorInput!]
    deleteMany: [PostScalarWhereInput!]
  }

  input FileUploadUpdateOneWithoutAuthorNestedInput {
    create: FileUploadCreateWithoutAuthorInput
    connectOrCreate: FileUploadCreateOrConnectWithoutAuthorInput
    upsert: FileUploadUpsertWithoutAuthorInput
    disconnect: FileUploadWhereInput
    delete: FileUploadWhereInput
    connect: FileUploadWhereUniqueInput
    update: FileUploadUpdateToOneWithWhereWithoutAuthorInput
  }

  input PostUncheckedUpdateManyWithoutAuthorNestedInput {
    create: [PostCreateWithoutAuthorInput!]
    connectOrCreate: [PostCreateOrConnectWithoutAuthorInput!]
    upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
    createMany: PostCreateManyAuthorInputEnvelope
    set: [PostWhereUniqueInput!]
    disconnect: [PostWhereUniqueInput!]
    delete: [PostWhereUniqueInput!]
    connect: [PostWhereUniqueInput!]
    update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
    updateMany: [PostUpdateManyWithWhereWithoutAuthorInput!]
    deleteMany: [PostScalarWhereInput!]
  }

  input UserCreateNestedManyWithoutAvatarInput {
    create: [UserCreateWithoutAvatarInput!]
    connectOrCreate: [UserCreateOrConnectWithoutAvatarInput!]
    createMany: UserCreateManyAvatarInputEnvelope
    connect: [UserWhereUniqueInput!]
  }

  input UserUncheckedCreateNestedManyWithoutAvatarInput {
    create: [UserCreateWithoutAvatarInput!]
    connectOrCreate: [UserCreateOrConnectWithoutAvatarInput!]
    createMany: UserCreateManyAvatarInputEnvelope
    connect: [UserWhereUniqueInput!]
  }

  input UserUpdateManyWithoutAvatarNestedInput {
    create: [UserCreateWithoutAvatarInput!]
    connectOrCreate: [UserCreateOrConnectWithoutAvatarInput!]
    upsert: [UserUpsertWithWhereUniqueWithoutAvatarInput!]
    createMany: UserCreateManyAvatarInputEnvelope
    set: [UserWhereUniqueInput!]
    disconnect: [UserWhereUniqueInput!]
    delete: [UserWhereUniqueInput!]
    connect: [UserWhereUniqueInput!]
    update: [UserUpdateWithWhereUniqueWithoutAvatarInput!]
    updateMany: [UserUpdateManyWithWhereWithoutAvatarInput!]
    deleteMany: [UserScalarWhereInput!]
  }

  input UserUncheckedUpdateManyWithoutAvatarNestedInput {
    create: [UserCreateWithoutAvatarInput!]
    connectOrCreate: [UserCreateOrConnectWithoutAvatarInput!]
    upsert: [UserUpsertWithWhereUniqueWithoutAvatarInput!]
    createMany: UserCreateManyAvatarInputEnvelope
    set: [UserWhereUniqueInput!]
    disconnect: [UserWhereUniqueInput!]
    delete: [UserWhereUniqueInput!]
    connect: [UserWhereUniqueInput!]
    update: [UserUpdateWithWhereUniqueWithoutAvatarInput!]
    updateMany: [UserUpdateManyWithWhereWithoutAvatarInput!]
    deleteMany: [UserScalarWhereInput!]
  }

  input UserCreateNestedOneWithoutPostInput {
    create: UserCreateWithoutPostInput
    connectOrCreate: UserCreateOrConnectWithoutPostInput
    connect: UserWhereUniqueInput
  }

  input BoolFieldUpdateOperationsInput {
    set: Boolean
  }

  input UserUpdateOneRequiredWithoutPostNestedInput {
    create: UserCreateWithoutPostInput
    connectOrCreate: UserCreateOrConnectWithoutPostInput
    upsert: UserUpsertWithoutPostInput
    connect: UserWhereUniqueInput
    update: UserUpdateToOneWithWhereWithoutPostInput
  }

  input NestedStringFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringFilter
  }

  input NestedDateTimeFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeFilter
  }

  input NestedStringNullableFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringNullableFilter
  }

  input NestedStringWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedStringFilter
    _max: NestedStringFilter
  }

  input NestedIntFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntFilter
  }

  input NestedDateTimeWithAggregatesFilter {
    equals: DateTime
    in: [DateTime!]
    notIn: [DateTime!]
    lt: DateTime
    lte: DateTime
    gt: DateTime
    gte: DateTime
    not: NestedDateTimeWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedDateTimeFilter
    _max: NestedDateTimeFilter
  }

  input NestedStringNullableWithAggregatesFilter {
    equals: String
    in: [String!]
    notIn: [String!]
    lt: String
    lte: String
    gt: String
    gte: String
    contains: String
    startsWith: String
    endsWith: String
    not: NestedStringNullableWithAggregatesFilter
    _count: NestedIntNullableFilter
    _min: NestedStringNullableFilter
    _max: NestedStringNullableFilter
  }

  input NestedIntNullableFilter {
    equals: Int
    in: [Int!]
    notIn: [Int!]
    lt: Int
    lte: Int
    gt: Int
    gte: Int
    not: NestedIntNullableFilter
  }

  input NestedJsonNullableFilter {
    equals: Json
    path: [String!]
    string_contains: String
    string_starts_with: String
    string_ends_with: String
    array_contains: Json
    array_starts_with: Json
    array_ends_with: Json
    lt: Json
    lte: Json
    gt: Json
    gte: Json
    not: Json
  }

  input NestedBoolFilter {
    equals: Boolean
    not: NestedBoolFilter
  }

  input NestedBoolWithAggregatesFilter {
    equals: Boolean
    not: NestedBoolWithAggregatesFilter
    _count: NestedIntFilter
    _min: NestedBoolFilter
    _max: NestedBoolFilter
  }

  input PostCreateWithoutAuthorInput {
    id: String
    title: String!
    content: Json
    published: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  input PostUncheckedCreateWithoutAuthorInput {
    id: String
    title: String!
    content: Json
    published: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  input PostCreateOrConnectWithoutAuthorInput {
    where: PostWhereUniqueInput!
    create: PostCreateWithoutAuthorInput!
  }

  input PostCreateManyAuthorInputEnvelope {
    data: [PostCreateManyAuthorInput!]!
    skipDuplicates: Boolean
  }

  input FileUploadCreateWithoutAuthorInput {
    id: String
    type: String!
    filePathUrl: String!
    thumbnailPathUrl: String
    createdAt: DateTime
    updatedAt: DateTime
    authorId: String!
  }

  input FileUploadUncheckedCreateWithoutAuthorInput {
    id: String
    type: String!
    filePathUrl: String!
    thumbnailPathUrl: String
    createdAt: DateTime
    updatedAt: DateTime
    authorId: String!
  }

  input FileUploadCreateOrConnectWithoutAuthorInput {
    where: FileUploadWhereUniqueInput!
    create: FileUploadCreateWithoutAuthorInput!
  }

  input PostUpsertWithWhereUniqueWithoutAuthorInput {
    where: PostWhereUniqueInput!
    update: PostUpdateWithoutAuthorInput!
    create: PostCreateWithoutAuthorInput!
  }

  input PostUpdateWithWhereUniqueWithoutAuthorInput {
    where: PostWhereUniqueInput!
    data: PostUpdateWithoutAuthorInput!
  }

  input PostUpdateManyWithWhereWithoutAuthorInput {
    where: PostScalarWhereInput!
    data: PostUpdateManyMutationInput!
  }

  input PostScalarWhereInput {
    AND: [PostScalarWhereInput!]
    OR: [PostScalarWhereInput!]
    NOT: [PostScalarWhereInput!]
    id: StringFilter
    title: StringFilter
    content: JsonNullableFilter
    published: BoolFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    authorId: StringFilter
  }

  input FileUploadUpsertWithoutAuthorInput {
    update: FileUploadUpdateWithoutAuthorInput!
    create: FileUploadCreateWithoutAuthorInput!
    where: FileUploadWhereInput
  }

  input FileUploadUpdateToOneWithWhereWithoutAuthorInput {
    where: FileUploadWhereInput
    data: FileUploadUpdateWithoutAuthorInput!
  }

  input FileUploadUpdateWithoutAuthorInput {
    id: String
    type: String
    filePathUrl: String
    thumbnailPathUrl: String
    createdAt: DateTime
    updatedAt: DateTime
    authorId: String
  }

  input FileUploadUncheckedUpdateWithoutAuthorInput {
    id: String
    type: String
    filePathUrl: String
    thumbnailPathUrl: String
    createdAt: DateTime
    updatedAt: DateTime
    authorId: String
  }

  input UserCreateWithoutAvatarInput {
    id: String
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    Post: PostCreateNestedManyWithoutAuthorInput
  }

  input UserUncheckedCreateWithoutAvatarInput {
    id: String
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    Post: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  input UserCreateOrConnectWithoutAvatarInput {
    where: UserWhereUniqueInput!
    create: UserCreateWithoutAvatarInput!
  }

  input UserCreateManyAvatarInputEnvelope {
    data: [UserCreateManyAvatarInput!]!
    skipDuplicates: Boolean
  }

  input UserUpsertWithWhereUniqueWithoutAvatarInput {
    where: UserWhereUniqueInput!
    update: UserUpdateWithoutAvatarInput!
    create: UserCreateWithoutAvatarInput!
  }

  input UserUpdateWithWhereUniqueWithoutAvatarInput {
    where: UserWhereUniqueInput!
    data: UserUpdateWithoutAvatarInput!
  }

  input UserUpdateManyWithWhereWithoutAvatarInput {
    where: UserScalarWhereInput!
    data: UserUpdateManyMutationInput!
  }

  input UserScalarWhereInput {
    AND: [UserScalarWhereInput!]
    OR: [UserScalarWhereInput!]
    NOT: [UserScalarWhereInput!]
    id: StringFilter
    createdAt: DateTimeFilter
    username: StringNullableFilter
    password: StringNullableFilter
    email: StringFilter
    roles: StringNullableListFilter
    googleId: StringNullableFilter
    googleProfile: JsonNullableFilter
    avatarId: StringNullableFilter
  }

  input UserCreateWithoutPostInput {
    id: String
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    avatar: FileUploadCreateNestedOneWithoutAuthorInput
  }

  input UserUncheckedCreateWithoutPostInput {
    id: String
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
    avatarId: String
  }

  input UserCreateOrConnectWithoutPostInput {
    where: UserWhereUniqueInput!
    create: UserCreateWithoutPostInput!
  }

  input UserUpsertWithoutPostInput {
    update: UserUpdateWithoutPostInput!
    create: UserCreateWithoutPostInput!
    where: UserWhereInput
  }

  input UserUpdateToOneWithWhereWithoutPostInput {
    where: UserWhereInput
    data: UserUpdateWithoutPostInput!
  }

  input UserUpdateWithoutPostInput {
    id: String
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    avatar: FileUploadUpdateOneWithoutAuthorNestedInput
  }

  input UserUncheckedUpdateWithoutPostInput {
    id: String
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    avatarId: String
  }

  input PostCreateManyAuthorInput {
    id: String
    title: String!
    content: Json
    published: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  input PostUpdateWithoutAuthorInput {
    id: String
    title: String
    content: Json
    published: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  input PostUncheckedUpdateWithoutAuthorInput {
    id: String
    title: String
    content: Json
    published: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  input PostUncheckedUpdateManyWithoutAuthorInput {
    id: String
    title: String
    content: Json
    published: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  input UserCreateManyAvatarInput {
    id: String
    createdAt: DateTime
    username: String
    password: String
    email: String!
    roles: [String!]
    googleId: String
    googleProfile: Json
  }

  input UserUpdateWithoutAvatarInput {
    id: String
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    Post: PostUpdateManyWithoutAuthorNestedInput
  }

  input UserUncheckedUpdateWithoutAvatarInput {
    id: String
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
    Post: PostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  input UserUncheckedUpdateManyWithoutAvatarInput {
    id: String
    createdAt: DateTime
    username: String
    password: String
    email: String
    roles: [String!]
    googleId: String
    googleProfile: Json
  }

  type AggregateUser {
    _count: UserCountAggregateOutputType
    _min: UserMinAggregateOutputType
    _max: UserMaxAggregateOutputType
  }

  type AggregateFileUpload {
    _count: FileUploadCountAggregateOutputType
    _min: FileUploadMinAggregateOutputType
    _max: FileUploadMaxAggregateOutputType
  }

  type AggregatePost {
    _count: PostCountAggregateOutputType
    _min: PostMinAggregateOutputType
    _max: PostMaxAggregateOutputType
  }

  type UserCountOutputType {
    Post: Int!
  }

  type UserCountAggregateOutputType {
    id: Int!
    createdAt: Int!
    username: Int!
    password: Int!
    email: Int!
    roles: Int!
    googleId: Int!
    googleProfile: Int!
    avatarId: Int!
    _all: Int!
  }

  type UserMinAggregateOutputType {
    id: String
    createdAt: DateTime
    username: String
    password: String
    email: String
    googleId: String
    avatarId: String
  }

  type UserMaxAggregateOutputType {
    id: String
    createdAt: DateTime
    username: String
    password: String
    email: String
    googleId: String
    avatarId: String
  }

  type FileUploadCountOutputType {
    author: Int!
  }

  type FileUploadCountAggregateOutputType {
    id: Int!
    type: Int!
    filePathUrl: Int!
    thumbnailPathUrl: Int!
    createdAt: Int!
    updatedAt: Int!
    authorId: Int!
    _all: Int!
  }

  type FileUploadMinAggregateOutputType {
    id: String
    type: String
    filePathUrl: String
    thumbnailPathUrl: String
    createdAt: DateTime
    updatedAt: DateTime
    authorId: String
  }

  type FileUploadMaxAggregateOutputType {
    id: String
    type: String
    filePathUrl: String
    thumbnailPathUrl: String
    createdAt: DateTime
    updatedAt: DateTime
    authorId: String
  }

  type PostCountAggregateOutputType {
    id: Int!
    title: Int!
    content: Int!
    published: Int!
    createdAt: Int!
    updatedAt: Int!
    authorId: Int!
    _all: Int!
  }

  type PostMinAggregateOutputType {
    id: String
    title: String
    published: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    authorId: String
  }

  type PostMaxAggregateOutputType {
    id: String
    title: String
    published: Boolean
    createdAt: DateTime
    updatedAt: DateTime
    authorId: String
  }
`;
