import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('attendance_sessions')
export class AttendanceSession {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 36 })
  batch_id: string;

  @Column({ type: 'varchar', length: 36 })
  subject_id: string;

  @Column({ type: 'varchar', length: 36 })
  teacher_id: string;

  @Column({ type: 'date' })
  attendance_date: Date;

  @Column({ type: 'varchar', length: 36, nullable: true })
  live_class_id: string;

  @Column({ default: 'ACTIVE' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
