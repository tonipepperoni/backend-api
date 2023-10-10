import { ApiConstants } from '@zen/common';
import { MaxLength } from 'class-validator';
import {Field, InputType} from "@nestjs/graphql";

const LONGEST = ApiConstants.USERNAME_MAX_LENGTH > 254 ? ApiConstants.USERNAME_MAX_LENGTH : 254;

@InputType()
export class AuthPasswordResetSearchRequestInput {
  @Field()
  @MaxLength(LONGEST)
  readonly emailOrUsername: string;
}
