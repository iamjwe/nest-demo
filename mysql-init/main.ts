import { createDatabase } from './scripts/create.database';
import { createTable } from './scripts/create.table';
import { readJsonFileSync } from './utils/io';
import { insertData } from './scripts/insert.table'
import * as path from 'path';


async function bootstrap() {
  const dbConfig = readJsonFileSync(path.resolve('mysql-init/config/ormconfig.json'));
  createDatabase({ host: dbConfig.host, port: dbConfig.port, user:dbConfig.username, password: dbConfig.password },dbConfig.database) .then(() => {
    console.log('create database success')
    return createTable(dbConfig)
  }).then(() => {
    console.log('create table success')
    return insertData()
  }).then(() => {
    console.log('mysql init success!')
  }).catch(() => {
    console.error('mysql init error!')
  })
}
bootstrap();

