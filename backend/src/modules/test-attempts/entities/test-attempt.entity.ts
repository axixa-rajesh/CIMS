import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('test_attempts')
export class TestAttempt {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('uuid')
  test_id!: string;

  @Column('uuid')
  student_id!: string;

  @Column({ type: 'datetime' })
  started_at!: Date;

  @Column({ type: 'datetime', nullable: true })
  submitted_at?: Date;

  @Column('int', { nullable: true })
  obtained_marks?: number;

  @Column({ default: 'PENDING' })
  status!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}