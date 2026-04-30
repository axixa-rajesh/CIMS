import { IsString, IsNotEmpty, IsOptional, IsEmail, IsUUID, IsDateString } from 'class-validator';

export class CreateTeacherDto {
  @IsUUID()
  @IsNotEmpty()
  institute_id: string;

  @IsUUID()
  @IsNotEmpty()
  branch_id: string;

  @IsUUID()
  @IsOptional()
  user_id?: string;

  @IsString()
  @IsNotEmpty()
  employee_code: string;

  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  qualification?: string;

  @IsDateString()
  @IsOptional()
  joining_date?: string;

  @IsString()
  @IsOptional()
  status?: string;
}
