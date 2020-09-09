import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @Inject('CONFIG') private readonly config
  ){}

  async test(): Promise<string> {
    return this.config['test']
  }

}