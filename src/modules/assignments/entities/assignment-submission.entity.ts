import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('assignment_submissions')
export class AssignmentSubmission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 36 })
  assignment_id: string;

  @Column({ type: 'varchar', length: 36 })
  student_id: string;

  @Column({ type: 'text', nullable: true })
  submission_text: string;

  @Column({ type: 'text', nullable: true })
  file_url: string;

  @Column({ type: 'datetime' })
  submitted_at: Date;

  @Column({ type: 'int', nullable: true })
  marks_awarded: number;

  @Column({ type: 'text', nullable: true })
  feedback_text: string;

  @Column({ default: 'SUBMITTED' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
