import { Module, Global } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from './modules/config/config.module';
import { DatabaseModule } from './modules/db/database.module'

@Module({
  imports: [UserModule, ConfigModule,DatabaseModule],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
