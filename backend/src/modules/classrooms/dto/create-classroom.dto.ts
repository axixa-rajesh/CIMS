import { IsNotEmpty, IsString, IsInt, IsOptional, IsEnum } from 'class-validator';

export class CreateClassroomDto {
  @IsInt()
  @IsNotEmpty()
  branch_id: number;

  @IsString()
  @IsNotEmpty()
  room_name: string;

  @IsString()
  @IsOptional()
  room_code: string;

  @IsInt()
  @IsOptional()
  capacity: number;

  @IsEnum(['active', 'inactive'])
  @IsOptional()
  status: string;
}

export class UpdateClassroomDto {
  @IsInt()
  @IsOptional()
  branch_id?: number;

  @IsString()
  @IsOptional()
  room_name?: string;

  @IsString()
  @IsOptional()
  room_code?: string;

  @IsInt()
  @IsOptional()
  capacity?: number;

  @IsEnum(['active', 'inactive'])
  @IsOptional()
  status?: string;
}
