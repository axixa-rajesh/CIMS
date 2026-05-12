import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateStudentFeePlanDto {

  @IsNotEmpty({ message: 'Student select karo' })
  student_id!: number;

  @IsNotEmpty({ message: 'Fee structure select karo' })
  fee_structure_id!: number;

  @IsNumber()
  discount_amount!: number;

  @IsNumber()
  @IsPositive({ message: 'Final amount 0 se zyada hona chahiye' })
  final_amount!: number;

}