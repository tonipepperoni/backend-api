import { mergeTypeDefs } from '@graphql-tools/merge';

import InputTypes from './InputTypes';
import Post from './Post/typeDefs';
import User from './User/typeDefs';

export default mergeTypeDefs([InputTypes, Post, User]);
