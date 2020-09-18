import { Controller, Get, Post, Res, Body, UseGuards,UseInterceptors, CacheInterceptor, CacheKey,CacheTTL } from '@nestjs/common';
import { Param } from '../../common/decorators/param.decorator';
import { UserService } from './user.service';
import { CreateUserDto } from '../../pojo/dto/user.create.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { LocalAuthGuard } from '../../aop/guards/local-auth.guard';
import { JwtAuthGuard } from '../../aop/guards/jwt-auth.guard';
import { databaseProviders } from '../db/database.providers';


@ApiBearerAuth() // Swagger 的 JWT 验证
@ApiTags('user')
@Controller('/user')
@UseInterceptors(CacheInterceptor)
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Get('/configData')
  async configData(){
    console.log('接口调用');
    const data = await this.userService.configData();
    return data;
  }

  @Get('/logTest')
  async logTest(){
    console.log('接口调用');
    const data = await this.userService.logTest();
    return data;
  }

  @UseGuards(LocalAuthGuard)
  @Get('/one')
  async getOne(){
    const data = await this.userService.testTypeOrm();
    return data;
  }

  @Post('/test')
  async create(@Param() createUserDto: CreateUserDto){
    return createUserDto;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile() {
    return 'xxx';
  }
}