import { IsNotEmpty, IsInt, IsOptional, IsString, IsDateString, IsEnum } from 'class-validator';

export class CreateAssignmentDto {
  @IsInt()
  @IsNotEmpty()
  batch_id: number;

  @IsInt()
  @IsNotEmpty()
  subject_id: number;

  @IsInt()
  @IsNotEmpty()
  teacher_id: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsDateString()
  @IsOptional()
  assigned_date: string;

  @IsDateString()
  @IsNotEmpty()
  due_date: string;

  @IsInt()
  @IsOptional()
  max_marks: number;

  @IsEnum(['draft', 'published', 'closed'])
  @IsOptional()
  status: string;
}

export class UpdateAssignmentDto {
  @IsInt() @IsOptional() batch_id?: number;
  @IsInt() @IsOptional() subject_id?: number;
  @IsInt() @IsOptional() teacher_id?: number;
  @IsString() @IsOptional() title?: string;
  @IsString() @IsOptional() description?: string;
  @IsDateString() @IsOptional() assigned_date?: string;
  @IsDateString() @IsOptional() due_date?: string;
  @IsInt() @IsOptional() max_marks?: number;
  @IsEnum(['draft', 'published', 'closed']) @IsOptional() status?: string;
}
