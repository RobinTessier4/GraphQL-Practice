import { Args, ID, Query, Resolver } from '@nestjs/graphql';

import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  getUser(@Args('userId', { type: () => ID }) userId: User['id']): Promise<User> {
    return this.userService.getUser(userId);
  }

  @Query(() => [User])
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }
}
