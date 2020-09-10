import { Module, Global } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { userProviders } from './providers/user.providers';

@Global()
@Module({
  providers: [...databaseProviders,
    ...userProviders],
  exports: [
    ...databaseProviders,
    ...userProviders
  ],
})
export class DatabaseModule {}