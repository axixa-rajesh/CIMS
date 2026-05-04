import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Admission } from '../../admissions/entities/admission.entity';

@Entity('admission_leads')
export class AdmissionLead {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 36 })
  institute_id: string;

  @Column({ type: 'varchar', length: 36 })
  branch_id: string;

  @Column()
  student_name: string;

  @Column({ nullable: true })
  parent_name: string;

  @Column()
  phone: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  course_interest: string;

  @Column({ default: 'PENDING' })
  lead_status: string;

  @Column({ type: 'text', nullable: true })
  remarks: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Admission, (admission) => admission.lead)
  admissions: Admission[];
}
