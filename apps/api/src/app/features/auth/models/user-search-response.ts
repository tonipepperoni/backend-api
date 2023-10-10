import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType("UserSearchResponse")
export class UserSearchResponse {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field(() => String, {nullable: true})
  username: string | null;
}
