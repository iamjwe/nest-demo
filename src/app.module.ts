import { Module, Global } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from './modules/config/config.module';


@Module({
  imports: [UserModule, ConfigModule],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
