import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum TestType {
  MCQ = 'MCQ',
  SUBJECTIVE = 'Subjective',
}

@Entity('tests')
export class Test {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('int')
  batch_id!: number;

  @Column('int')
  subject_id!: number;

  @Column('int')
  teacher_id!: number;

  @Column({ type: 'varchar', length: 150 })
  title!: string;

  @Column({ type: 'enum', enum: TestType })
  test_type!: TestType;

  @Column({ type: 'date' })
  test_date!: Date;

  @Column('smallint')
  duration_minutes!: number;

  @Column('smallint')
  max_marks!: number;

  @Column({ default: 'ACTIVE' })
  status!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}