import { ApiConstants } from '@zen/common';
import { IsBoolean, Length } from 'class-validator';
import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class AuthLoginInput {
  @Field()
  @Length(ApiConstants.USERNAME_MIN_LENGTH, ApiConstants.USERNAME_MAX_LENGTH)
  readonly username: string;

  @Field()
  @Length(1, ApiConstants.PASSWORD_MAX_LENGTH)
  readonly password: string;

  @Field()
  @IsBoolean()
  readonly rememberMe: boolean;
}
