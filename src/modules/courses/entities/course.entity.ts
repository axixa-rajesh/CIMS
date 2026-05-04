import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { Institute } from '../../academic/entities/institute.entity';
import { Branch } from '../../academic/entities/branch.entity';
import { Subject } from '../../subjects/entities/subject.entity';
import { Batch } from '../../batches/entities/batch.entity';
import { Enrollment } from '../../enrollments/entities/enrollment.entity';

@Entity('courses')
export class Course {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  // 🔗 Institute
  @Column({ type: 'varchar', length: 36 })
  institute_id: string;

  @ManyToOne(() => Institute, (institute) => institute.courses, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'institute_id' })
  institute: Institute;

  // 🔗 Branch
  @Column({ type: 'varchar', length: 36 })
  branch_id: string;

  @ManyToOne(() => Branch, (branch) => branch.courses, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'branch_id' })
  branch: Branch;

  // 🔹 Course Info
  @Column()
  name: string;

  @Column({ unique: true })
  code: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ nullable: true })
  duration: string;

  @Column({ default: 'ACTIVE' })
  status: string;

  // 🔗 Relations

  @OneToMany(() => Subject, (subject) => subject.course, {
    cascade: true,
  })
  subjects: Subject[];

  @OneToMany(() => Batch, (batch) => batch.course, {
    cascade: true,
  })
  batches: Batch[];

  @OneToMany(() => Enrollment, (enrollment) => enrollment.course)
  enrollments: Enrollment[];

  // 🔹 Timestamps
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}