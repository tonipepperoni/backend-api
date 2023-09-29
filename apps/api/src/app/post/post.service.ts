import {Injectable} from "@nestjs/common";
import {PrismaService} from "../prisma";

@Injectable()
export class PostService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async getPosts() {
    return this.prisma.post.findMany();
  }

  async createPost(data: any) {
    return this.prisma.post.create(data);
  }
}
