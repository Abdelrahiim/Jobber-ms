import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsStrongPassword, Matches } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String)
	@IsEmail()
  email: string;

  @Field(() => String)
	@IsStrongPassword()
  password: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;
}
