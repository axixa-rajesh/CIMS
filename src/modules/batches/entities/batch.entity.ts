import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('batches')
export class Batch {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 36 })
  institute_id: string;

  @Column({ type: 'varchar', length: 36 })
  branch_id: string;

  @Column({ type: 'varchar', length: 36 })
  course_id: string;

  @Column({ type: 'varchar', length: 36 })
  session_id: string;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column({ nullable: true })
  batch_mode: string;

  @Column({ type: 'date', nullable: true })
  start_date: Date;

  @Column({ type: 'date', nullable: true })
  end_date: Date;

  @Column({ nullable: true })
  capacity: number;

  @Column({ default: 'ACTIVE' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
