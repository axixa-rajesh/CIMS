import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('notifications')
export class Notification {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column()
  message!: string;

  @Column('uuid')
  user_id!: string;

  @Column({ length: 100 })
  module_name!: string;

  @Column('uuid')
  reference_id!: string;

  @Column({ default: false })
  is_read!: boolean;

  @Column({ default: 'ACTIVE' })
  status!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}