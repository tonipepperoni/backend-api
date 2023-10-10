import {Global, Module} from "@nestjs/common";
import {BullModule} from "@nestjs/bull";
import {ConfigModule, ConfigService} from "../config";
import {RegisterProcessor} from "./register.processor";
import {ResetPasswordProcessor} from "./reset.password.processor";
import {MailService} from "../mail";
import {JwtService} from "@nestjs/jwt";

@Global()
@Module({
  imports:[
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        redis: {
          host: configService.redis?.host,
          port: Number(configService.redis?.port),
        },
      }),
      inject: [ConfigService]
    }),
  ],
  exports:[QueueModule],
  providers:[JwtService, MailService, RegisterProcessor, ResetPasswordProcessor],
})
export class QueueModule {}
