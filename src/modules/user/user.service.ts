import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../entity/user.entity';
import { ConfigService } from '../config/config.services';

@Injectable()
export class UserService {
  constructor(
    private readonly configService: ConfigService,
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ){}

  async test(): Promise<string> {
    return this.configService.get('test')
  }

  async findOne(username): Promise<User> {
    const user = await this.userRepository.findOne(username);
    return user;
  }

  async testTypeOrm(): Promise<User> {
    const user = await this.userRepository.findOne(1);
    return user;
  }

}