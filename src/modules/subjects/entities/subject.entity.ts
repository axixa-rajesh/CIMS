import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Course } from '../../courses/entities/course.entity';
import { BatchTeacher } from '../../batches/entities/batch-teacher.entity';

@Entity('subjects')
export class Subject {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 36 })
  course_id: string;

  @ManyToOne(() => Course, (course) => course.subjects)
  @JoinColumn({ name: 'course_id' })
  course: Course;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ default: 'ACTIVE' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => BatchTeacher, (batchTeacher) => batchTeacher.subject)
  batchTeachers: BatchTeacher[];
}
