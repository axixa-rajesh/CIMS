import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Student } from '../../students/entities/student.entity';
import { Course } from '../../courses/entities/course.entity';
import { Batch } from '../../batches/entities/batch.entity';
import { AcademicSession } from '../../academic/entities/academic-session.entity';

@Entity('enrollments')
export class Enrollment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 36 })
  student_id: string;

  @ManyToOne(() => Student)
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @Column({ type: 'varchar', length: 36 })
  course_id: string;

  @ManyToOne(() => Course, (course) => course.enrollments)
  @JoinColumn({ name: 'course_id' })
  course: Course;

  @Column({ type: 'varchar', length: 36, nullable: true })
  batch_id: string;

  @ManyToOne(() => Batch, (batch) => batch.enrollments, { nullable: true })
  @JoinColumn({ name: 'batch_id' })
  batch: Batch;

  @Column({ type: 'varchar', length: 36 })
  session_id: string;

  @ManyToOne(() => AcademicSession)
  @JoinColumn({ name: 'session_id' })
  session: AcademicSession;

  @Column({ type: 'date' })
  enrollment_date: Date;

  @Column({ default: 'ACTIVE' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
