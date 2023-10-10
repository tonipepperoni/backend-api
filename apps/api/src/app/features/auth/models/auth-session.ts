import { User } from '../../prisma';
import {Field, ObjectType} from "@nestjs/graphql";

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

  @Field(() => [String])
  rules: any;//object[];

  @Field()
  email: string;

  @Field()
  username: string;
}
