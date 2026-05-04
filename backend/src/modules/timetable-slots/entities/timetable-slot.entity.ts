import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('timetable_slots')
export class TimetableSlot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  branch_id: number;

  @Column({ length: 100 })
  slot_name: string;

  @Column({ type: 'time' })
  start_time: string;

  @Column({ type: 'time' })
  end_time: string;

  @Column({ default: false })
  is_break_slot: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
