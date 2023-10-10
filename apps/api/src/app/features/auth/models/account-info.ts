import { FileUpload } from "../../prisma/generated";
import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType("AccountInfo")
export class AccountInfo {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field(() => String, {nullable: true})
  username: string | null;

  @Field()
  createdAt: Date;

  @Field(() => FileUpload, {nullable: true})
  avatar?: FileUpload | null;
}
