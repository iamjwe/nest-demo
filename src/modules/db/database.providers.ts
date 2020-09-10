import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'MYSQL_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'user_group2',
      entities: [
          __dirname + '/../../entity/**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
  },
];
