import { Module, CacheModule } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from './modules/config/config.module';
import { DatabaseModule } from './modules/db/database.module';
import { LoggerModule } from './modules/logger/logger.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UserModule, ConfigModule,LoggerModule,DatabaseModule, AuthModule],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
