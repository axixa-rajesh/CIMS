import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('attendance_sessions')
export class AttendanceSession {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  batch_id?: number;

  @Column()
  subject_id: number;

  @Column()
  teacher_id: number;

  @Column()
  branch_id: number;

  @Column()
  session_id: number;

  @Column({ type: 'date' })
  attendance_date: string;

  @Column({ nullable: true })
  live_class_id: number;

  @Column({ type: 'enum', enum: ['draft', 'published'], default: 'draft' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
