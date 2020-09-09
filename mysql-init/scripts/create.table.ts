import { createConnection, Connection } from "typeorm";
import { DbConfig } from '../type/interface';
import * as path from 'path';

export async function createTable(config: DbConfig) {
  const { host, port, username, password, database, entities, synchronize} = config;
  const connection: Connection = await createConnection(
    {
      type: "mysql",
      port: Number(port),
      entities: [path.resolve(entities)],
      host,
      username,
      password,
      database,
      synchronize
    }
  );
  return Promise.resolve()
}
