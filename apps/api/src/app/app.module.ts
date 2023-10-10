import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
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
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';

@Module({
  imports: [
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.throttle,
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: "./apps/api/src/schema.graphql",
      // useFactory: async (
      //
      //   configService: ConfigService,
      //   //schemaMergerService: SchemaMergerService
      // ) => {
      //   //const { schema, plugins } = await schemaMergerService.mergeSchemas();
      //
      //   return {
      //     //schema,
      //     //plugins,
      //     installSubscriptionHandlers: true,
      //     buildSchemaOptions: {
      //     },
      //     sortSchema: true,
      //     debug: true,
      //     playground: true,
      //     csrfPrevention: true,
      //     context: ({ req }: {req: any}) => ({ req }),
      //
      //   },
      inject: [ConfigService,],
      imports: [PrismaModule, ConfigModule],
    }),
    ZenAuthModule,
    ConfigModule,
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
