import { Module, Provider } from '@nestjs/common';
import { NestAuthModule } from '@zen/nest-auth';

import { environment } from '../../../environments/environment';
import { JwtModule } from '../jwt';
import { PrismaModule } from '../prisma';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { authFieldsProvider } from './casl/auth-fields';
import { AppCaslFactory } from './casl/casl.factory';
import { GoogleOAuthStrategy } from './strategies/google-oauth.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import {AuthResolver} from "./auth.resolver";
import {MailModule} from "../mail";
import {QueueModule} from "../queue/queue.module";
import {BullModule} from "@nestjs/bull";

const oauthProviders: Provider[] = [];
if (environment.oauth?.google?.clientID) oauthProviders.push(GoogleOAuthStrategy);

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'register-queue'
    }),
    BullModule.registerQueue({
      name: 'reset-password-queue'
    }),
    JwtModule,
    PrismaModule,
    QueueModule,
    MailModule,
    NestAuthModule.register(AppCaslFactory)],
  providers: [JwtStrategy, AuthService, authFieldsProvider, ...oauthProviders, AuthResolver],
  exports: [JwtModule, AuthService, NestAuthModule, authFieldsProvider, AuthResolver],
  controllers: [AuthController],
})
export class ZenAuthModule {}
