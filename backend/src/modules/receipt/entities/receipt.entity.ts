import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Payment } from '../../payment/entities/payment.entity';

@Entity('receipts')
export class Receipt {
  @PrimaryGeneratedColumn()
  id!: number;

  // Payment se relation (apna hi module)
  @ManyToOne(() => Payment)
  @JoinColumn({ name: 'payment_id' })
  payment!: Payment;

  @Column()
  payment_id!: number;

  @Column({ unique: true })
  receipt_no!: string;

  @Column({ type: 'date' })
  receipt_date!: Date;

  @Column({ type: 'text', nullable: true })
  receipt_url!: string;

  // FK → users.id (Student 2 ki entity - kisne receipt issue ki)
  @Column({ nullable: true })
  issued_by_user_id!: number;

  @CreateDateColumn()
  created_at!: Date;
}
