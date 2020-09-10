import { Controller, Get, Post, Res, Body } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';
import { CreateUserDto } from '../../pojo/dto/user.create.dto'
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
@ApiBearerAuth() // Swagger 的 JWT 验证
@ApiTags('user')
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

  @Post('/test')
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response){
    res.send(createUserDto.name);
  }

}