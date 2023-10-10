import { ApiConstants } from '@zen/common';
import { IsEmail, Length } from 'class-validator';
import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class AuthRegisterInput {
  @Field()
  @Length(ApiConstants.USERNAME_MIN_LENGTH, ApiConstants.USERNAME_MAX_LENGTH)
  readonly username: string;

  @Field()
  @IsEmail()
  @Length(3, 254)
  readonly email: string;

  @Field()
  @Length(ApiConstants.PASSWORD_MIN_LENGTH, ApiConstants.PASSWORD_MAX_LENGTH)
  readonly password: string;
}
