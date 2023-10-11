import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class AuthExchangeTokenInput {
  @Field()
  readonly rememberMe: boolean;
}
