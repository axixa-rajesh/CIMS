import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { FeeStructure } from '../../fee_structure/entities/fee_structure.entity';

@Entity('student_fee_plans')
export class StudentFeePlan {
  @PrimaryGeneratedColumn()
  id!: number;

  // FK → students.id (Student 3 ki entity - kis student ka fee plan hai)
  @Column()
  student_id!: number;

  // FK → batches.id (Student 3 ki entity - kis batch ke liye fee plan hai)
  @Column({ nullable: true })
  batch_id!: number;

  // FK → academic_sessions.id (Student 2 ki entity - kis session ka fee plan)
  @Column({ nullable: true })
  session_id!: number;

  // FeeStructure se relation (apna hi module)
  @ManyToOne(() => FeeStructure)
  @JoinColumn({ name: 'fee_structure_id' })
  feeStructure!: FeeStructure;

  @Column()
  fee_structure_id!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  discount_amount!: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  final_amount!: number;

  @Column({ default: 'ACTIVE' })
  status!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
