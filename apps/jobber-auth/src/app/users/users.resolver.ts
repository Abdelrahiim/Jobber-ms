import { Resolver, Query } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './models/user.model';

@Resolver(() => User) 
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  public async getUser() {
    return this.usersService.findAll();
  }
}
