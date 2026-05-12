import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { StudentFeePlan } from '../../student_fee_plan/entities/student_fee_plan.entity';

@Entity('invoices')
export class Invoice {
  @PrimaryGeneratedColumn()
  id!: number;

  // FK → students.id (Student 3 ki entity - kis student ka invoice hai)
  @Column()
  student_id!: number;

  // FK → batches.id (Student 3 ki entity - kis batch ke liye invoice)
  @Column({ nullable: true })
  batch_id!: number;

  // FK → academic_sessions.id (Student 2 ki entity - kis session ka invoice)
  @Column({ nullable: true })
  session_id!: number;

  // FK → branches.id (Student 2 ki entity - kis branch ka invoice)
  @Column({ nullable: true })
  branch_id!: number;

  // FK → courses.id (Student 3 ki entity - kis course ke liye invoice)
  @Column({ nullable: true })
  course_id!: number;

  // StudentFeePlan se relation (apna hi module)
  @ManyToOne(() => StudentFeePlan)
  @JoinColumn({ name: 'student_fee_plan_id' })
  studentFeePlan!: StudentFeePlan;

  @Column({ nullable: true })
  student_fee_plan_id!: number;

  @Column({ unique: true })
  invoice_no!: string;

  @Column({ type: 'date' })
  invoice_date!: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total_amount!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  discount_amount!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  net_amount!: number;

  @Column({ type: 'date', nullable: true })
  due_date!: Date;

  // UNPAID | PARTIAL | PAID
  @Column({ default: 'UNPAID' })
  payment_status!: string;

  @Column({ default: 'ACTIVE' })
  status!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
