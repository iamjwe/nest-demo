import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Role {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 191, unique: true })
  name: string;

  @Column('varchar', { length: 191 })
  note: string;

  @Column('varchar', { length: 191, default: new Date().getTime() + '' })
  createTime?: string;

  @Column('int', { default: 0 })
  isPreset: number;
}
