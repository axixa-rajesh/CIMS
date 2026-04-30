import { IsString, IsOptional, IsEmail, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateAdmissionLeadDto {
  @IsUUID()
  @IsNotEmpty()
  institute_id: string;

  @IsUUID()
  @IsNotEmpty()
  branch_id: string;

  @IsString()
  @IsNotEmpty()
  student_name: string;

  @IsString()
  @IsOptional()
  parent_name?: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  course_interest?: string;

  @IsString()
  @IsOptional()
  lead_status?: string;

  @IsString()
  @IsOptional()
  remarks?: string;
}
