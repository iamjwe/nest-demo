import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  userName: string;

  @Column('varchar')
  password: string;

  @Column('varchar')
  nickName: string;

  @Column('varchar')
  openId: string;

  @Column('varchar')
  registerType: string;

  @Column('varchar')
  email: string;

  @Column('varchar')
  phone: string;

  @Column('varchar')
  note: string;

  @Column('varchar')
  createTime: string;

  @Column('int')
  isDelete: number;

  @Column('varchar')
  microsoftId: string;

  @Column('varchar')
  wechatId: string;

}