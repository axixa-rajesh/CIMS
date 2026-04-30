import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Student } from './student.entity';

@Entity('student_guardians')
export class StudentGuardian {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 36 })
  student_id: string;

  @ManyToOne(() => Student, (student) => student.guardians)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @Column()
  guardian_name: string;

  @Column({ nullable: true })
  relation: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  occupation: string;

  @Column({ type: 'text', nullable: true })
  address: string;

  @Column({ default: 'ACTIVE' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
