import { IsNotEmpty, IsInt, IsOptional, IsEnum, IsString } from 'class-validator';

export class CreateTimetableDto {
  @IsInt()
  @IsNotEmpty()
  batch_id: number;

  @IsInt()
  @IsNotEmpty()
  subject_id: number;

  @IsInt()
  @IsNotEmpty()
  teacher_id: number;

  @IsInt()
  @IsNotEmpty()
  class_room_id: number;

  @IsInt()
  @IsNotEmpty()
  slot_id: number;

  @IsEnum(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
  @IsNotEmpty()
  day_of_week: string;

  @IsString()
  @IsOptional()
  start_time: string;

  @IsString()
  @IsOptional()
  end_time: string;

  @IsEnum(['active', 'inactive'])
  @IsOptional()
  status: string;
}

export class UpdateTimetableDto {
  @IsInt() @IsOptional() batch_id?: number;
  @IsInt() @IsOptional() subject_id?: number;
  @IsInt() @IsOptional() teacher_id?: number;
  @IsInt() @IsOptional() class_room_id?: number;
  @IsInt() @IsOptional() slot_id?: number;
  @IsEnum(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']) @IsOptional() day_of_week?: string;
  @IsString() @IsOptional() start_time?: string;
  @IsString() @IsOptional() end_time?: string;
  @IsEnum(['active', 'inactive']) @IsOptional() status?: string;
}
