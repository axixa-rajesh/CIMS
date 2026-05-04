import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('assignment_submissions')
export class AssignmentSubmission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  assignment_id: number;

  @Column()
  student_id: number;

  @Column({ type: 'text', nullable: true })
  submission_text: string;

  @Column({ type: 'text', nullable: true })
  file_url: string;

  @CreateDateColumn()
  submitted_at: Date;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  marks_awarded: number;

  @Column({ type: 'text', nullable: true })
  feedback_text: string;

  @Column({ type: 'enum', enum: ['pending', 'graded', 'resubmission_requested'], default: 'pending' })
  status: string;

  @UpdateDateColumn()
  updated_at: Date;
}
