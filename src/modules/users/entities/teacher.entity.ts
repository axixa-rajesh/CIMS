import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Institute } from '../../academic/entities/institute.entity';
import { Branch } from '../../academic/entities/branch.entity';
import { BatchTeacher } from '../../academic/entities/batch-teacher.entity';

@Entity('teachers')
export class Teacher {
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

  @Column({ type: 'varchar', length: 36, nullable: true })
  user_id: string;

  @Column({ unique: true })
  employee_code: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ unique: true, nullable: true })
  email: string;

  @Column({ type: 'text', nullable: true })
  qualification: string;

  @Column({ type: 'date', nullable: true })
  joining_date: Date;

  @Column({ default: 'ACTIVE' })
  status: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => BatchTeacher, (batchTeacher) => batchTeacher.teacher)
  batchTeachers: BatchTeacher[];
}
