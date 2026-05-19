import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { StudentFeePlan } from '../../student_fee_plan/entities/student_fee_plan.entity';

@Entity('fee_structures')
export class FeeStructure {
  @PrimaryGeneratedColumn()
  id!: number;

  // FK → courses.id (Student 3 ki entity - courses table se link)
  @Column()
  course_id!: number;

  // FK → institutes.id (Student 2 ki entity - institute level fee structure)
  @Column({ nullable: true })
  institute_id!: number;

  // FK → branches.id (Student 2 ki entity - branch level fee structure)
  @Column({ nullable: true })
  branch_id!: number;

  @Column()
  name!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total_amount!: number;

  @Column()
  installment_count!: number;

  @Column({ default: 'ACTIVE' })
  status!: string;

  // Ek fee structure ke many student fee plans ho sakte hain
  @OneToMany(() => StudentFeePlan, (plan) => plan.feeStructure)
  studentFeePlans!: StudentFeePlan[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
