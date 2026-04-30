import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Institute } from '../../academic/entities/institute.entity';
import { Branch } from '../../academic/entities/branch.entity';
import { AcademicSession } from '../../academic/entities/academic-session.entity';
import { StudentGuardian } from './student-guardian.entity';
import { StudentDocument } from './student-document.entity';
import { Admission } from '../../admission/entities/admission.entity';

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

  @Column({ type: 'varchar', length: 36 })
  user_id: string;

  @Column({ unique: true })
  admission_no: string;

  @Column({ nullable: true })
  roll_no: string;

  @Column()
  first_name: string;

  @Column()
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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => StudentGuardian, (guardian) => guardian.student)
  guardians: StudentGuardian[];

  @OneToMany(() => StudentDocument, (document) => document.student)
  documents: StudentDocument[];

  @OneToOne(() => Admission, (admission) => admission.student)
  admission: Admission;
}
