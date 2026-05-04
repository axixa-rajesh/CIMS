import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('live_classes')
export class LiveClass {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  batch_id: number;

  @Column()
  subject_id: number;

  @Column()
  teacher_id: number;

  @Column()
  branch_id: number;

  @Column()
  session_id: number;

  @Column({ length: 255 })
  title: string;

  @Column({ type: 'text', nullable: true })
  join_url: string;

  @Column({ type: 'datetime' })
  start_datetime: Date;

  @Column({ type: 'datetime' })
  end_datetime: Date;

  @Column({ type: 'text', nullable: true })
  recording_url: string;

  @Column({ type: 'enum', enum: ['scheduled', 'ongoing', 'completed', 'cancelled'], default: 'scheduled' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
