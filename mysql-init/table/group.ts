import { Entity, PrimaryGeneratedColumn, Column, Index, DeleteDateColumn } from 'typeorm';


@Entity()
@Index(['name'], {unique: true})
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 191 })
  name: string;

  @Column('varchar', { length: 191, default: '' })
  note: string;

  @Column('varchar', { length: 191 })
  createTime: string;
}
