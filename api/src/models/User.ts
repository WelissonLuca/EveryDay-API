import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('users')
class User {
  @PrimaryColumn()
  readonly id: string;
  @Column()
  name: string;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  phone: string;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  update_at: Date;
  @DeleteDateColumn()
  deleted_at: Date;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

export { User };
