import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Batch } from './batch.entity';
import { Student } from '../../users/entities/student.entity';

@Entity('batch_students')
export class BatchStudent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 36 })
  batch_id: string;

  @ManyToOne(() => Batch, (batch) => batch.batchStudents)
  @JoinColumn({ name: 'batch_id' })
  batch: Batch;

  @Column({ type: 'varchar', length: 36 })
  student_id: string;

  @ManyToOne(() => Student)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @Column({ type: 'date', nullable: true })
  joined_on: Date;

  @Column({ default: 'ACTIVE' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
