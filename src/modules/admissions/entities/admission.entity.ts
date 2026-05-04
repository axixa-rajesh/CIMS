import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';

import { AdmissionLead } from '../../admission-leads/entities/admission-lead.entity';
import { Branch } from '../../academic/entities/branch.entity';
import { AcademicSession } from '../../academic/entities/academic-session.entity';
import { Student } from '../../students/entities/student.entity';

@Entity('admissions')
export class Admission {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // 🔗 Lead (optional)
  @Column({ type: 'varchar', length: 36, nullable: true })
  lead_id: string;

  @ManyToOne(() => AdmissionLead, (lead) => lead.admissions, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'lead_id' })
  lead: AdmissionLead;

  // 🔗 Student (OneToOne)
  @Column({ type: 'varchar', length: 36 })
  student_id: string;

  @OneToOne(() => Student, (student) => student.admission)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  // 🔹 Admission Info
  @Column({ unique: true })
  admission_no: string;

  @Column({ type: 'date' })
  admission_date: Date;

  // 🔗 Branch
  @Column({ type: 'varchar', length: 36 })
  branch_id: string;

  @ManyToOne(() => Branch, (branch) => branch.admissions)
  @JoinColumn({ name: 'branch_id' })
  branch: Branch;

  // 🔗 Session
  @Column({ type: 'varchar', length: 36 })
  session_id: string;

  @ManyToOne(() => AcademicSession, (session) => session.admissions)
  @JoinColumn({ name: 'session_id' })
  session: AcademicSession;

  // 🔹 Status
  @Column({ default: 'ACTIVE' })
  status: string;

  // 🔹 Timestamps
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}