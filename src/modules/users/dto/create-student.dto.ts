import { IsString, IsEmail, IsOptional, IsEnum, IsDateString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateStudentDto {
  @IsInt()
  @IsNotEmpty()
  institute_id: number;

  @IsInt()
  @IsNotEmpty()
  branch_id: number;

  @IsInt()
  @IsNotEmpty()
  user_id ?: number;

  @IsString()
  @IsNotEmpty()
  admission_no: string;

  @IsString()
  @IsOptional()
  roll_no?: string;

  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsString()
  @IsOptional()
  gender?: string;

  @IsDateString()
  @IsOptional()
  dob?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  status?: string;
}
