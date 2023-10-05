import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';

import { environment } from '../environments/environment';
import { ZenAuthModule } from './features/auth';
import { ConfigModule, ConfigService } from './features/config';
import { ZenGraphQLModule } from './features/graphql';
import { JwtModule } from './features/jwt';
import { MailModule } from './features/mail';
import { PrismaModule } from './features/prisma';
import { ImageUploadModule } from "./features/image-upload";

@Module({
  imports: [
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.throttle,
    }),
    ZenAuthModule,
    ConfigModule,
    ZenGraphQLModule,
    JwtModule,
    MailModule,
    PrismaModule,
    ImageUploadModule
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(graphqlUploadExpress(environment.graphql.uploads)).forRoutes('graphql');
  }
}
