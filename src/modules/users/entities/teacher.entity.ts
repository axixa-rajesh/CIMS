import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('teachers')
export class Teacher {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('uuid')
  institute_id?: string;

  @Column('uuid')
  branch_id?: string;

  @Column('uuid')
  user_id?: string;

  @Column({ unique: true })
  employee_code?: string;

  @Column()
  first_name?: string;

  @Column()
  last_name?: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ unique: true, nullable: true })
  email?: string;

  @Column({ type: 'text', nullable: true })
  qualification?: string;

  @Column({ type: 'date', nullable: true })
  joining_date?: Date;

  @Column({ default: 'ACTIVE' })
  status?: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;
}
