import { AbstractModel } from '@jobber/nestjs';
import { Field, ObjectType } from '@nestjs/graphql';
import { User as PrismaUser } from '@prisma-clients/jobber-auth';

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


  @Field()
  createdAt: Date;
}
