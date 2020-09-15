import { Controller, Get, Post, Res, Body, UseGuards,UseInterceptors, CacheInterceptor, CacheKey,CacheTTL } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';
import { CreateUserDto } from '../../pojo/dto/user.create.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { LocalAuthGuard } from '../../aop/guards/local-auth.guard';
import { JwtAuthGuard } from '../../aop/guards/jwt-auth.guard';

@ApiBearerAuth() // Swagger 的 JWT 验证
@ApiTags('user')
@Controller('/user')
@UseInterceptors(CacheInterceptor)
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  // @CacheKey('custom_key')
  // @CacheTTL(20)// 20秒存储一次
  @Get('/configData')
  async configData(@Res() res: Response){
    console.log('接口调用');
    const data = await this.userService.configData();
    res.send(data);
  }

  @Get('/logTest')
  async logTest(@Res() res: Response){
    console.log('接口调用');
    const data = await this.userService.logTest();
    res.send(data);
  }

  @UseGuards(LocalAuthGuard)
  @Get('/one')
  async getOne(@Res() res: Response){
    const data = await this.userService.testTypeOrm();
    res.send(data);
  }

  @Post('/test')
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response){
    res.send(createUserDto.name);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile() {
    return 'xxx';
  }
}