import { IsNotEmpty, IsDateString } from 'class-validator';

export class CreateReceiptDto {

  @IsNotEmpty({ message: 'Payment select karo' })
  payment_id!: number;

  @IsNotEmpty({ message: 'Receipt number likho' })
  receipt_no!: string;

  @IsDateString({}, { message: 'Receipt date sahi likho' })
  receipt_date!: string;

}