import { Controller, Request, Get, Post, UseGuards, Body} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from '../../aop/guards/local-auth.guard';
import { LoginDto } from '../../pojo/dto/auth.login.dto';


@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Post('/login')
  async login(@Body() user: LoginDto) {
    return this.authService.login(user);
  }

}
