import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('timetables')
export class Timetable {
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

  @Column()
  class_room_id: number;

  @Column()
  slot_id: number;

  @Column({ type: 'enum', enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] })
  day_of_week: string;

  @Column({ type: 'time', nullable: true })
  start_time: string;

  @Column({ type: 'time', nullable: true })
  end_time: string;

  @Column({ type: 'enum', enum: ['active', 'inactive'], default: 'active' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
