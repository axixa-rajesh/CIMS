import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('timetables')
export class Timetable {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 36 })
  batch_id: string;

  @Column({ type: 'varchar', length: 36 })
  subject_id: string;

  @Column({ type: 'varchar', length: 36 })
  teacher_id: string;

  @Column({ type: 'varchar', length: 36 })
  class_room_id: string;

  @Column({ type: 'varchar', length: 36 })
  slot_id: string;

  @Column()
  day_of_week: string;

  @Column({ type: 'time' })
  start_time: string;

  @Column({ type: 'time' })
  end_time: string;

  @Column({ default: 'ACTIVE' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
