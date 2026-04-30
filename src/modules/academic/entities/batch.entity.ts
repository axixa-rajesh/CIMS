import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Course } from './course.entity';
import { Institute } from './institute.entity';
import { Branch } from './branch.entity';
import { AcademicSession } from './academic-session.entity';
import { BatchStudent } from './batch-student.entity';
import { BatchTeacher } from './batch-teacher.entity';
import { Enrollment } from './enrollment.entity';

@Entity('batches')
export class Batch {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 36 })
  institute_id: string;

  @ManyToOne(() => Institute)
  @JoinColumn({ name: 'institute_id' })
  institute: Institute;

  @Column({ type: 'varchar', length: 36 })
  branch_id: string;

  @ManyToOne(() => Branch)
  @JoinColumn({ name: 'branch_id' })
  branch: Branch;

  @Column({ type: 'varchar', length: 36 })
  course_id: string;

  @ManyToOne(() => Course, (course) => course.batches)
  @JoinColumn({ name: 'course_id' })
  course: Course;

  @Column({ type: 'varchar', length: 36 })
  session_id: string;

  @ManyToOne(() => AcademicSession)
  @JoinColumn({ name: 'session_id' })
  session: AcademicSession;

  @Column()
  name: string;

  @Column({ unique: true })
  code: string;

  @Column({ nullable: true })
  batch_mode: string;

  @Column({ type: 'date', nullable: true })
  start_date: Date;

  @Column({ type: 'date', nullable: true })
  end_date: Date;

  @Column({ nullable: true })
  capacity: number;

  @Column({ default: 'ACTIVE' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => BatchStudent, (batchStudent) => batchStudent.batch)
  batchStudents: BatchStudent[];

  @OneToMany(() => BatchTeacher, (batchTeacher) => batchTeacher.batch)
  batchTeachers: BatchTeacher[];

  @OneToMany(() => Enrollment, (enrollment) => enrollment.batch)
  enrollments: Enrollment[];
}
