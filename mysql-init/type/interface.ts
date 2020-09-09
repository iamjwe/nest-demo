export interface MysqlConfig{
  host: string,
  port: string,
  user: string,
  password: string,
}
export interface DbConfig{
  host: string,
  port: string,
  username: string,
  password: string,
  database: string,
  entities: string,
  synchronize: boolean
}