import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Invoice } from '../../invoice/entities/invoice.entity';

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn()
  id!: number;

  // FK → students.id (Student 3 ki entity - kis student ne payment ki)
  @Column()
  student_id!: number;

  // Invoice se relation (apna hi module)
  @ManyToOne(() => Invoice)
  @JoinColumn({ name: 'invoice_id' })
  invoice!: Invoice;

  @Column()
  invoice_id!: number;

  // Payment date alag column hai, auto-generate nahi
  @Column({ type: 'date' })
  payment_date!: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  paid_amount!: number;

  // CASH | ONLINE | UPI | CHEQUE | DD | CARD
  @Column()
  payment_mode!: string;

  @Column({ nullable: true })
  transaction_ref_no!: string;

  // FK → users.id (Student 2 ki entity - kisne payment receive ki)
  @Column({ nullable: true })
  received_by_user_id!: number;

  @Column({ default: 'ACTIVE' })
  status!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
