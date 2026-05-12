import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('activity_logs')
export class ActivityLog {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  user_id!: number;

  @Column()
  action!: string;

  @Column()
  module!: string;

  @Column({ type: 'text', nullable: true })
  details!: string;

  @Column({ nullable: true })
  ip_address!: string;

  @CreateDateColumn()
  created_at!: Date;
}
