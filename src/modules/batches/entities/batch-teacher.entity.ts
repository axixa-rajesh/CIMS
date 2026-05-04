import {
  Entity, Column, PrimaryGeneratedColumn,
  CreateDateColumn, UpdateDateColumn,
  ManyToOne, JoinColumn, Unique
} from 'typeorm';

import { Batch } from './batch.entity';
import { Teacher } from '../../teachers/entities/teacher.entity';
import { Subject } from '../../subjects/entities/subject.entity';

@Entity('batch_teachers')
@Unique(['batch_id', 'teacher_id', 'subject_id']) // 🔥 duplicate रोकने के लिए
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