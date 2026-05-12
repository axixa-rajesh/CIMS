import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('results')
export class Result {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('uuid')
  student_id!: string;

  @Column('uuid')
  test_id!: string;

  @Column('uuid')
  batch_id!: string;

  @Column('int')
  total_marks!: number;

  @Column('int')
  obtained_marks!: number;

  @Column('float')
  percentage!: number;

  @Column({ type: 'varchar', length: 10 })
  grade!: string;

  @Column({ type: 'datetime', nullable: true })
  published_at?: Date;

  @Column({ default: 'DRAFT' })
  status!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}