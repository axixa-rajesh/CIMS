import { IsNotEmpty, IsOptional, IsUUID, IsDateString, IsString } from 'class-validator';

export class CreateEnrollmentDto {
  @IsUUID()
  @IsNotEmpty()
  student_id: string;

  @IsUUID()
  @IsNotEmpty()
  course_id: string;

  @IsUUID()
  @IsOptional()
  batch_id?: string;

  @IsUUID()
  @IsNotEmpty()
  session_id: string;

  @IsDateString()
  @IsNotEmpty()
  enrollment_date: string;

  @IsString()
  @IsOptional()
  status?: string;
}
