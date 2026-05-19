import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreatePaymentDto {

  @IsNotEmpty({ message: 'Student select karo' })
  student_id!: number;

  @IsNotEmpty({ message: 'Invoice select karo' })
  invoice_id!: number;

  @IsNumber()
  @IsPositive({ message: 'Paid amount 0 se zyada hona chahiye' })
  paid_amount!: number;

  @IsNotEmpty({ message: 'Payment mode likho' })
  payment_mode!: string;

}