import { ApiConstants } from '@zen/common';
import { IsNotEmpty, Length } from 'class-validator';
import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class AuthPasswordResetConfirmationInput {
  @Field()
  @Length(ApiConstants.PASSWORD_MIN_LENGTH, ApiConstants.PASSWORD_MAX_LENGTH)
  readonly newPassword: string;

  @Field()
  @IsNotEmpty()
  readonly token: string;
}
