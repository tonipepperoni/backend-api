import {Global, Module} from "@nestjs/common";
import {BullModule} from "@nestjs/bull";
import {ConfigModule, ConfigService} from "../config";

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
  exports:[QueueModule]
})
export class QueueModule {}
