import { AbstractModel } from '@jobber/nestjs';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User extends AbstractModel {
  @Field(() => String)
  email: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;
}
