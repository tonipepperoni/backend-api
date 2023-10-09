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
