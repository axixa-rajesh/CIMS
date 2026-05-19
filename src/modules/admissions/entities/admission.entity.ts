import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Branch } from '../../branches/entities/branch.entity';
import { AcademicSession } from '../../academic-sessions/entities/academic-session.entity';

@Entity('admissions')
export class Admission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 36, nullable: true })
  lead_id: string;

  @Column({ type: 'varchar', length: 36, nullable: true })
  student_id: string;

  @Column({ unique: true })
  admission_no: string;

  @Column({ type: 'date' })
  admission_date: Date;

  @Column()
  branch_id: string;

  @ManyToOne(() => Branch)
  @JoinColumn({ name: 'branch_id' })
  branch: Branch;

  @Column()
  session_id: string;

  @ManyToOne(() => AcademicSession)
  @JoinColumn({ name: 'session_id' })
  session: AcademicSession;

  @Column({ default: 'ACTIVE' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
