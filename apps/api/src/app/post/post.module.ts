import {Module} from "@nestjs/common";
import {PrismaModule} from "../prisma";
import {PostService} from "./post.service";

@Module({
  imports: [PrismaModule],
  providers: [PostService],
  exports: [PostService],
})
export class PostModule {}
