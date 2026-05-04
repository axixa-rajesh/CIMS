import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('assignments')
export class Assignment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  batch_id: number;

  @Column()
  subject_id: number;

  @Column()
  teacher_id: number;

  @Column({ length: 255 })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'date', nullable: true })
  assigned_date: string;

  @Column({ type: 'date' })
  due_date: string;

  @Column({ nullable: true })
  max_marks: number;

  @Column({ type: 'enum', enum: ['draft', 'published', 'closed'], default: 'draft' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
