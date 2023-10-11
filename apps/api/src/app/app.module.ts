import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import {ThrottlerModule} from '@nestjs/throttler';
import graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';

import { environment } from '../environments/environment';
import { ZenAuthModule } from './features/auth';
import { ConfigModule, ConfigService } from './features/config';
import { JwtModule } from './features/jwt';
import { MailModule } from './features/mail';
import { PrismaModule } from './features/prisma';
import { ImageUploadModule } from "./features/image-upload";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver } from "@nestjs/apollo";
import { IContext } from "./features/graphql/models";
import {PostModule} from "./features/post/post.module";
import {UserModule} from "./features/user/user.module";

@Module({
  imports: [
    ConfigModule,
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.throttle,
    }),
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useFactory: async (config: ConfigService) => {
        return {
          autoSchemaFile: config.graphql.autoSchemaFile,
          installSubscriptionHandlers: config.graphql.installSubscriptionHandlers,
          sortSchema: config.graphql.sortSchema,
          debug: config.graphql.debug,
          playground: config.graphql.playground,
          csrfPrevention: config.graphql.csrfPrevention,
          allowBatchedHttpRequests: config.graphql.allowBatchedHttpRequests,
          introspection: config.graphql.introspection,
          cache: config.graphql.cache,
          subscriptions: config.graphql.subscriptions
            ? {
              'graphql-ws': {
                onConnect: (context: any) => {
                  const { connectionParams, extra } = context;
                  extra.token = connectionParams.token;
                },
              },
            }
            : undefined,
          context: (ctx: any): IContext => {
            // Subscriptions pass through JWT token for authentication
            if (ctx.extra) return { req: ctx.extra };
            // Queries, Mutations
            else return ctx;
          },
        }
      },
      inject: [ConfigService],
    }),
    ZenAuthModule,
    JwtModule,
    MailModule,
    PrismaModule,
    ImageUploadModule,
    PostModule,
    UserModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(graphqlUploadExpress(environment.graphql.uploads)).forRoutes('graphql');
  }
}
