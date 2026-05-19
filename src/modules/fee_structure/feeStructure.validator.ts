import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateFeeStructureDto {

  @IsNotEmpty({ message: 'Course select karo' })
  course_id!: number;

  @IsNotEmpty({ message: 'Naam likho' })
  name!: string;

  @IsNumber()
  @IsPositive({ message: 'Amount 0 se zyada hona chahiye' })
  total_amount!: number;

  @IsNumber()
  @IsPositive({ message: 'Installment count 0 se zyada hona chahiye' })
  installment_count!: number;

}