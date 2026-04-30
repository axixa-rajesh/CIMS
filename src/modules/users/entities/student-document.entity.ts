import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Student } from './student.entity';

@Entity('student_documents')
export class StudentDocument {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 36 })
  student_id: string;

  @ManyToOne(() => Student, (student) => student.documents)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @Column()
  document_type: string;

  @Column()
  document_name: string;

  @Column()
  file_url: string;

  @Column({ default: 'ACTIVE' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
