import { IsString, IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class CreateCourseDto {
  @IsUUID()
  @IsNotEmpty()
  institute_id: string;

  @IsUUID()
  @IsNotEmpty()
  branch_id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  duration?: string;

  @IsString()
  @IsOptional()
  status?: string;
}
