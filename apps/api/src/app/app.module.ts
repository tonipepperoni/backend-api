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
import { BookModule } from "./features/book/book.module";
import {QueueModule} from "./features/queue/queue.module";
import {BullModule} from "@nestjs/bull";

/*
import { ApolloDriver } from '@nestjs/apollo';
import { Global, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { ZenAuthModule } from '../auth';
import { ConfigModule } from '../config';
import { MailModule } from '../mail';
import { PrismaModule } from '../prisma';
import { GqlConfigService } from './gql-config.service';
import { ALL_RESOLVERS } from './resolvers';
import {BullModule} from "@nestjs/bull";
import {QueueModule} from "../queue/queue.module";
import {RegisterProcessor} from "../queue/register.processor";
import {ResetPasswordProcessor} from "../queue/reset.password.processor";

@Global()
@Module({
  imports: [
    ZenAuthModule,
    MailModule,
    PrismaModule,
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useClass: GqlConfigService,
      imports: [PrismaModule, ConfigModule],
    }),
    QueueModule,
    BullModule.registerQueue({
      name: 'register-queue'
    }),
    BullModule.registerQueue({
      name: 'reset-password-queue'
    }),
  ],
  providers: [...ALL_RESOLVERS, RegisterProcessor, ResetPasswordProcessor],
})
export class ZenGraphQLModule {}

 */
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
      inject: [ConfigService]
    }),
    QueueModule,
    ZenAuthModule,
    JwtModule,
    MailModule,
    PrismaModule,
    ImageUploadModule,
    BookModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(graphqlUploadExpress(environment.graphql.uploads)).forRoutes('graphql');
  }
}
