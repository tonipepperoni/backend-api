import {Module} from "@nestjs/common";
import {PostResolver} from "./post.resolver";
import {PrismaModule} from "../prisma";

@Module({
  imports: [PrismaModule],
  providers: [PostResolver],
})
export class PostModule {}
