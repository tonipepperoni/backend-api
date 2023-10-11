import { mergeTypeDefs } from '@graphql-tools/merge';

import FileUpload from './FileUpload/typeDefs';
import InputTypes from './InputTypes';
import Post from './Post/typeDefs';
import User from './User/typeDefs';

export default mergeTypeDefs([InputTypes, FileUpload, Post, User]);
