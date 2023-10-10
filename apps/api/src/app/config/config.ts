import { Config } from './config.interface';
import * as process from "process";

const config: Config = {
  nest: {
    port: 3000,
  },
  cors: {
    enabled: true,
  },

  swagger: {
    enabled: true,
    title: 'Nestjs FTW',
    description: 'The nestjs API description',
    version: '1.5',
    path: 'api',
  },
  graphql: {
    playgroundEnabled: true,
    debug: true,
    schemaDestination: './src/schema.graphql',
    sortSchema: true,
  },
  security: {
    expiresIn: '5d',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
  },
  app: {
    appUrl: process.env.APP_URL
  }
};

export default (): Config => config;
