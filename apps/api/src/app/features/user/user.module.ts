import {Module} from "@nestjs/common";
import {AuthService} from "../auth";
import {UserResolver} from "./user.resolver";
import {PrismaModule} from "../prisma";
import {JwtService} from "@nestjs/jwt";
import {JwtStrategy} from "../auth/strategies/jwt.strategy";
import {NestAuthModule} from "@zen/nest-auth";
import {AppCaslFactory} from "../auth/casl/casl.factory";

@Module({
  imports: [PrismaModule, NestAuthModule.register(AppCaslFactory)],
  providers: [AuthService, JwtService, JwtStrategy, UserResolver],
})
export class UserModule {}
