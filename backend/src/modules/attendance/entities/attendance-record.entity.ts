import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('attendance_records')
export class AttendanceRecord {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  attendance_session_id?: number;

  @Column()
  student_id?: number;

  @Column({ type: 'enum', enum: ['present', 'absent', 'late', 'excused'] })
  attendance_status?: string;

  @Column({ type: 'text', nullable: true })
  remarks?: string;

  @Column()
  marked_by_user_id?: number;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;
}
