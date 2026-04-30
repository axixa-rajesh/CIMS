import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Batch } from './batch.entity';
import { Teacher } from '../../users/entities/teacher.entity';
import { Subject } from './subject.entity';

@Entity('batch_teachers')
export class BatchTeacher {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 36 })
  batch_id: string;

  @ManyToOne(() => Batch, (batch) => batch.batchTeachers)
  @JoinColumn({ name: 'batch_id' })
  batch: Batch;

  @Column({ type: 'varchar', length: 36 })
  teacher_id: string;

  @ManyToOne(() => Teacher, (teacher) => teacher.batchTeachers)
  @JoinColumn({ name: 'teacher_id' })
  teacher: Teacher;

  @Column({ type: 'varchar', length: 36 })
  subject_id: string;

  @ManyToOne(() => Subject, (subject) => subject.batchTeachers)
  @JoinColumn({ name: 'subject_id' })
  subject: Subject;

  @Column({ type: 'date', nullable: true })
  assigned_on: Date;

  @Column({ default: 'ACTIVE' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
