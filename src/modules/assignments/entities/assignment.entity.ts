import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('assignments')
export class Assignment {
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

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'date' })
  assigned_date: Date;

  @Column({ type: 'datetime' })
  due_date: Date;

  @Column({ type: 'int' })
  max_marks: number;

  @Column({ default: 'ACTIVE' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
