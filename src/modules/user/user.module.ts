import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})

export class UserModule {}