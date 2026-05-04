import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';

import { Institute } from '../../academic/entities/institute.entity';
import { Branch } from '../../academic/entities/branch.entity';
import { AcademicSession } from '../../academic/entities/academic-session.entity';
import { StudentGuardian } from '../../guardians/entities/guardian.entity';
import { StudentDocument } from './student-document.entity';
import { Admission } from '../../admissions/entities/admission.entity';
import { Enrollment } from '../../enrollments/entities/enrollment.entity';

@Entity('students')
export class Student {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 36 })
  institute_id: string;

  @ManyToOne(() => Institute, (institute) => institute.students)
  @JoinColumn({ name: 'institute_id' })
  institute: Institute;

  @Column({ type: 'varchar', length: 36 })
  branch_id: string;

  @ManyToOne(() => Branch, (branch) => branch.students)
  @JoinColumn({ name: 'branch_id' })
  branch: Branch;

  @Column({ type: 'varchar', length: 36 })
  session_id: string;

  @ManyToOne(() => AcademicSession, (session) => session.students)
  @JoinColumn({ name: 'session_id' })
  session: AcademicSession;

  @OneToMany(() => Enrollment, (enrollment) => enrollment.student)
  enrollments: Enrollment[];

  @Column({ type: 'varchar', length: 36, nullable: true })
  user_id: string;

  // 🔹 Basic Info
  @Column({ unique: true })
  admission_no: string;

  @Column({ nullable: true })
  roll_no: string;

  @Column()
  first_name: string;

  @Column({ nullable: true })
  last_name: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ type: 'date', nullable: true })
  dob: Date;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ type: 'text', nullable: true })
  address: string;

  @Column({ default: 'ACTIVE' })
  status: string;

  // 🔗 Relations

  @OneToMany(() => StudentGuardian, (guardian) => guardian.student, {
    cascade: true,
  })
  guardians: StudentGuardian[];

  @OneToMany(() => StudentDocument, (document) => document.student, {
    cascade: true,
  })
  documents: StudentDocument[];

  @OneToOne(() => Admission, (admission) => admission.student)
  admission: Admission;

  // 🔹 Timestamps
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}