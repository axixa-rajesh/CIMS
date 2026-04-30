import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { AdmissionLead } from './admission-lead.entity';
import { Branch } from '../../academic/entities/branch.entity';
import { AcademicSession } from '../../academic/entities/academic-session.entity';
import { Student } from '../../users/entities/student.entity';

@Entity('admissions')
export class Admission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 36, nullable: true })
  lead_id: string;

  @ManyToOne(() => AdmissionLead, (lead) => lead.admissions, { nullable: true })
  @JoinColumn({ name: 'lead_id' })
  lead: AdmissionLead;

  @Column({ type: 'varchar', length: 36 })
  student_id: string;

  @OneToOne(() => Student, (student) => student.admission)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @Column({ unique: true })
  admission_no: string;

  @Column({ type: 'date' })
  admission_date: Date;

  @Column({ type: 'varchar', length: 36 })
  branch_id: string;

  @ManyToOne(() => Branch, (branch) => branch.admissions)
  @JoinColumn({ name: 'branch_id' })
  branch: Branch;

  @Column({ type: 'varchar', length: 36 })
  session_id: string;

  @ManyToOne(() => AcademicSession, (session) => session.admissions)
  @JoinColumn({ name: 'session_id' })
  session: AcademicSession;

  @Column({ default: 'ACTIVE' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
