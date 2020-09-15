import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class RbacStrategy {

  async validate(): Promise<any> {
    // const user = await this.authService.validateUser(username, password);
    // if (!user) {
    //   throw new UnauthorizedException();
    // }
    // return user;
  }
}
