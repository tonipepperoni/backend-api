import {IsNotEmpty, IsNumber} from 'class-validator';

@InputType()
export class AuthPasswordResetRequestInput {
  @Field()
  @IsNotEmpty()
  @IsNumber()
  readonly id: string;
}
