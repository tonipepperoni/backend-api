import { Post } from "../../prisma";

export interface IPost {
  id: Post['id'];
  title: string;
  description?: string;
}
