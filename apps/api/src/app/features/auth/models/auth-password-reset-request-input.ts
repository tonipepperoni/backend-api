import {IsNotEmpty, IsNumber} from 'class-validator';
import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class AuthPasswordResetRequestInput {
  @Field()
  @IsNotEmpty()
  @IsNumber()
  readonly id: string;
}
