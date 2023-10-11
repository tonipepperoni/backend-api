import {Field, ObjectType} from "@nestjs/graphql";
import JSON from "graphql-type-json";

@ObjectType("AuthSession")
export class AuthSession {
  @Field()
  userId: string; //User['id'];

  @Field()
  token: string;

  @Field(() => [String])
  roles: string[];

  @Field()
  rememberMe: boolean;

  @Field()
  expiresIn: number;

  @Field(() => JSON)
  rules: any;

  @Field()
  email: string;

  @Field()
  username: string;
}
