import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './models/user.model';
import { CreateUserInput } from './dto/create-user.dto';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  public async getUser() {
    return this.usersService.findAll();
  }

  @Mutation(() => User)
  public async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput
  ) {
    return this.usersService.createUser(createUserInput);
  }
}
