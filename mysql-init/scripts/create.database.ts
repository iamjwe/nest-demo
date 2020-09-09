import * as mysql from 'mysql';
import { MysqlConfig } from '../type/interface';

export async function createDatabase(config: MysqlConfig, dbName: string) {
  const { host, port, user, password } = config
  const connection = mysql.createConnection({
    host,
    port,
    user,
    password
  })
  return new Promise((resolve, reject) => {
    connection.connect((err: any) => {
      if (err) throw 'connect mysql error,detail:   ' + err;
      connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName} DEFAULT CHARACTER SET 'utf8mb4'`, (err: any) => {
        if (err) throw `create database ${dbName} error,detail:    + ${err}`;
        connection.end();
        resolve();
      })
    })
  })
}