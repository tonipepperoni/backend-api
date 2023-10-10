import { ApiConstants } from '@zen/common';
import { Length } from 'class-validator';
import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class AuthPasswordChangeInput {
  @Field()
  @Length(1, ApiConstants.PASSWORD_MAX_LENGTH)
  readonly oldPassword: string;

  @Field()
  @Length(ApiConstants.PASSWORD_MIN_LENGTH, ApiConstants.PASSWORD_MAX_LENGTH)
  readonly newPassword: string;
}
