import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../entity/user.entity'
@Injectable()
export class UserService {
  constructor(
    @Inject('CONFIG') 
    private readonly config,
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ){}

  async test(): Promise<string> {
    return this.config['test']
  }

  async testTypeOrm(): Promise<User> {
    const user = await this.userRepository.findOne(1);
    return user;
  }

}