import {IsNotEmpty, IsNumber} from 'class-validator';

export class AuthPasswordResetRequestInput {
  @IsNotEmpty()
  @IsNumber()
  readonly id: string;
}
