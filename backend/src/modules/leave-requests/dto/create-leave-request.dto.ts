import { IsNotEmpty, IsInt, IsOptional, IsDateString, IsEnum, IsString } from 'class-validator';

export class CreateLeaveRequestDto {
  @IsInt()
  @IsNotEmpty()
  student_id: number;

  @IsDateString()
  @IsNotEmpty()
  from_date: string;

  @IsDateString()
  @IsNotEmpty()
  to_date: string;

  @IsString()
  @IsOptional()
  reason: string;

  @IsEnum(['pending', 'approved', 'rejected'])
  @IsOptional()
  approval_status: string;

  @IsInt()
  @IsOptional()
  approved_by_user_id: number;
}

export class UpdateLeaveRequestDto {
  @IsInt() @IsOptional() student_id?: number;
  @IsDateString() @IsOptional() from_date?: string;
  @IsDateString() @IsOptional() to_date?: string;
  @IsString() @IsOptional() reason?: string;
  @IsEnum(['pending', 'approved', 'rejected']) @IsOptional() approval_status?: string;
  @IsInt() @IsOptional() approved_by_user_id?: number;
}
