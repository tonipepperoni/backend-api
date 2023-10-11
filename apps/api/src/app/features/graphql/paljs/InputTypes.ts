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
    author: UserNullableRelationFilter
  }

  input FileUploadOrderByWithRelationInput {
    id: SortOrder
    type: SortOrder
    filePathUrl: SortOrder
    thumbnailPathUrl: SortOrderInput
    createdAt: SortOrder
    updatedAt: SortOrder
    authorId: SortOrder
    author: UserOrderByWithRelationInput
  }

  input FileUploadWhereUniqueInput {
    id: String
    authorId: String
    AND: [FileUploadWhereInput!]
    OR: [FileUploadWhereInput!]
    NOT: [FileUploadWhereInput!]
    type: StringFilter
    filePathUrl: StringFilter
    thumbnailPathUrl: StringNullableFilter
    createdAt: DateTimeFilter
    updatedAt: DateTimeFilter
    author: UserNullableRelationFilter
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
    Post: PostUncheckedCreateNestedManyWithoutAuthorInput
    avatar: FileUploadUncheckedCreateNestedOneWithoutAuthorInput
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
    Post: PostUncheckedUpdateManyWithoutAuthorNestedInput
    avatar: FileUploadUncheckedUpdateOneWithoutAuthorNestedInput
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
  }

  input FileUploadCreateInput {
    id: String
    type: String!
    filePathUrl: String!
    thumbnailPathUrl: String
    createdAt: DateTime
    updatedAt: DateTime
    author: UserCreateNestedOneWithoutAvatarInput
  }

  input FileUploadUncheckedCreateInput {
    id: String
    type: String!
    filePathUrl: String!
    thumbnailPathUrl: String
    createdAt: DateTime
    updatedAt: DateTime
    authorId: String!
  }

  input FileUploadUpdateInput {
    id: String
    type: String
    filePathUrl: String
    thumbnailPathUrl: String
    createdAt: DateTime
    updatedAt: DateTime
    author: UserUpdateOneWithoutAvatarNestedInput
  }

  input FileUploadUncheckedUpdateInput {
    id: String
    type: String
    filePathUrl: String
    thumbnailPathUrl: String
    createdAt: DateTime
    updatedAt: DateTime
    authorId: String
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
  }

  input UserMaxOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    googleId: SortOrder
  }

  input UserMinOrderByAggregateInput {
    id: SortOrder
    createdAt: SortOrder
    username: SortOrder
    password: SortOrder
    email: SortOrder
    googleId: SortOrder
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

  input UserNullableRelationFilter {
    is: UserWhereInput
    isNot: UserWhereInput
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

  input FileUploadUncheckedCreateNestedOneWithoutAuthorInput {
    create: FileUploadCreateWithoutAuthorInput
    connectOrCreate: FileUploadCreateOrConnectWithoutAuthorInput
    connect: FileUploadWhereUniqueInput
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

  input FileUploadUncheckedUpdateOneWithoutAuthorNestedInput {
    create: FileUploadCreateWithoutAuthorInput
    connectOrCreate: FileUploadCreateOrConnectWithoutAuthorInput
    upsert: FileUploadUpsertWithoutAuthorInput
    disconnect: FileUploadWhereInput
    delete: FileUploadWhereInput
    connect: FileUploadWhereUniqueInput
    update: FileUploadUpdateToOneWithWhereWithoutAuthorInput
  }

  input UserCreateNestedOneWithoutAvatarInput {
    create: UserCreateWithoutAvatarInput
    connectOrCreate: UserCreateOrConnectWithoutAvatarInput
    connect: UserWhereUniqueInput
  }

  input UserUpdateOneWithoutAvatarNestedInput {
    create: UserCreateWithoutAvatarInput
    connectOrCreate: UserCreateOrConnectWithoutAvatarInput
    upsert: UserUpsertWithoutAvatarInput
    disconnect: UserWhereInput
    delete: UserWhereInput
    connect: UserWhereUniqueInput
    update: UserUpdateToOneWithWhereWithoutAvatarInput
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
  }

  input FileUploadUncheckedCreateWithoutAuthorInput {
    id: String
    type: String!
    filePathUrl: String!
    thumbnailPathUrl: String
    createdAt: DateTime
    updatedAt: DateTime
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
  }

  input FileUploadUncheckedUpdateWithoutAuthorInput {
    id: String
    type: String
    filePathUrl: String
    thumbnailPathUrl: String
    createdAt: DateTime
    updatedAt: DateTime
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

  input UserUpsertWithoutAvatarInput {
    update: UserUpdateWithoutAvatarInput!
    create: UserCreateWithoutAvatarInput!
    where: UserWhereInput
  }

  input UserUpdateToOneWithWhereWithoutAvatarInput {
    where: UserWhereInput
    data: UserUpdateWithoutAvatarInput!
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
    avatar: FileUploadUncheckedCreateNestedOneWithoutAuthorInput
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
    avatar: FileUploadUncheckedUpdateOneWithoutAuthorNestedInput
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
    _all: Int!
  }

  type UserMinAggregateOutputType {
    id: String
    createdAt: DateTime
    username: String
    password: String
    email: String
    googleId: String
  }

  type UserMaxAggregateOutputType {
    id: String
    createdAt: DateTime
    username: String
    password: String
    email: String
    googleId: String
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
