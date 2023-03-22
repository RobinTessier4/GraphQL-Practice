import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async getUser(id: User['id']): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}
