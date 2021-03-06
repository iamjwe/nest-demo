import { Connection, Repository } from 'typeorm';
import { User } from '../../../entity/user.entity';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['MYSQL_CONNECTION'],
  },
];