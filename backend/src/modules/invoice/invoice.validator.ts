import { IsNotEmpty, IsNumber, IsPositive, IsDateString } from 'class-validator';

export class CreateInvoiceDto {

  @IsNotEmpty({ message: 'Student select karo' })
  student_id!: number;

  @IsDateString({}, { message: 'Invoice date sahi likho' })
  invoice_date!: string;

  @IsNumber()
  @IsPositive({ message: 'Total amount 0 se zyada hona chahiye' })
  total_amount!: number;

  @IsNumber()
  discount_amount!: number;

  @IsNumber()
  @IsPositive({ message: 'Net amount 0 se zyada hona chahiye' })
  net_amount!: number;

  @IsDateString({}, { message: 'Due date sahi likho' })
  due_date!: string;

}