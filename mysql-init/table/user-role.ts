import { Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { User } from './user';
import { Role } from './role';


@Entity()
@Index(['userId', 'roleId'], { unique: true })
export class UserRole {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => User, user => user, { onDelete: 'CASCADE', eager: true })
  @JoinColumn({ name: 'userId'} )
  user: User;

  @ManyToOne(type => Role, role => role, { onDelete: 'CASCADE', eager: true })
  @JoinColumn({ name: 'roleId' })
  role: Role;

  @Column()
  roleId: number;

  @Column()
  userId: number;

}
