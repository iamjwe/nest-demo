import { Module, Global } from '@nestjs/common';
import { ConfigService } from './config.services'

@Global()
@Module({
  providers: [ConfigService],
  exports: [ConfigService]
})

export class ConfigModule {}