import { Module, Global } from '@nestjs/common';
import { config } from '../../config/config' 

const ConfigProvider = {
  provide: 'CONFIG',
  useValue: config
}

@Global()
@Module({
  providers: [ConfigProvider],
  exports: [ConfigProvider]
})

export class ConfigModule {}