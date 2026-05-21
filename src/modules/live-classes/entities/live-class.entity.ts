import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('live_classes')
export class LiveClass {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 36 })
  batch_id: string;

  @Column({ type: 'varchar', length: 36 })
  subject_id: string;

  @Column({ type: 'varchar', length: 36 })
  teacher_id: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  join_url: string;

  @Column({ type: 'datetime' })
  start_datetime: Date;

  @Column({ type: 'datetime' })
  end_datetime: Date;

  @Column({ type: 'text', nullable: true })
  recording_url: string;

  @Column({ default: 'ACTIVE' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
