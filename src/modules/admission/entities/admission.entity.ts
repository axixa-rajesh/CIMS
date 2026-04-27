import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { AdmissionLead } from './admission-lead.entity';

@Entity('admissions')
export class Admission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  lead_id: number;

  @ManyToOne(() => AdmissionLead, { nullable: true })
  @JoinColumn({ name: 'lead_id' })
  lead: AdmissionLead;

  @Column()
  student_id: number;

  @Column({ unique: true })
  admission_no: string;

  @Column({ type: 'date' })
  admission_date: Date;

  @Column()
  branch_id: number;

  @Column()
  session_id: number;

  @Column({ default: 'ACTIVE' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
