import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../entity/user.entity';
import { ConfigService } from '../config/config.services';
import { MyLogger } from '../logger/my-logger.service';

@Injectable()
export class UserService {
  constructor(
    private readonly configService: ConfigService,
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
    private myLogger: MyLogger
  ){
    this.myLogger.setContext('userServices');
  }

  async configData(): Promise<string> {
    return this.configService.get('test')
  }

  async logTest(): Promise<string> {
    this.myLogger.error('log test success', 'error in logTest');
    return 'log test'
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