import { IsString, IsNotEmpty, IsOptional, IsUUID, IsInt, IsDateString } from 'class-validator';

export class CreateBatchDto {
  @IsUUID()
  @IsNotEmpty()
  institute_id: string;

  @IsUUID()
  @IsNotEmpty()
  branch_id: string;

  @IsUUID()
  @IsNotEmpty()
  course_id: string;

  @IsUUID()
  @IsNotEmpty()
  session_id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsOptional()
  batch_mode?: string;

  @IsDateString()
  @IsOptional()
  start_date?: string;

  @IsDateString()
  @IsOptional()
  end_date?: string;

  @IsInt()
  @IsOptional()
  capacity?: number;

  @IsString()
  @IsOptional()
  status?: string;
}
