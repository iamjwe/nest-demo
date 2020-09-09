import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Get('/test')
  async test(@Res() res: Response){
    const data = await this.userService.test();
    res.send(data);
  }

}