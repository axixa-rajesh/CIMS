import { IsString, IsOptional, IsNotEmpty, IsDateString, IsUUID } from 'class-validator';

export class CreateAdmissionDto {
  @IsUUID()
  @IsOptional()
  lead_id?: string;

  @IsUUID()
  @IsNotEmpty()
  student_id: string;

  @IsString()
  @IsNotEmpty()
  admission_no: string;

  @IsDateString()
  @IsNotEmpty()
  admission_date: string;

  @IsUUID()
  @IsNotEmpty()
  branch_id: string;

  @IsUUID()
  @IsNotEmpty()
  session_id: string;

  @IsString()
  @IsOptional()
  status?: string;
}
