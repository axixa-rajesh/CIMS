import { IsNotEmpty, IsInt, IsOptional, IsDateString, IsEnum } from 'class-validator';

export class CreateAttendanceDto {
  @IsInt()
  @IsNotEmpty()
  batch_id: number;

  @IsInt()
  @IsNotEmpty()
  subject_id: number;

  @IsInt()
  @IsNotEmpty()
  teacher_id: number;

  @IsDateString()
  @IsNotEmpty()
  attendance_date: string;

  @IsInt()
  @IsOptional()
  live_class_id: number;

  @IsEnum(['draft', 'published'])
  @IsOptional()
  status: string;
}

export class UpdateAttendanceDto {
  @IsInt() @IsOptional() batch_id?: number;
  @IsInt() @IsOptional() subject_id?: number;
  @IsInt() @IsOptional() teacher_id?: number;
  @IsDateString() @IsOptional() attendance_date?: string;
  @IsInt() @IsOptional() live_class_id?: number;
  @IsEnum(['draft', 'published']) @IsOptional() status?: string;
}
