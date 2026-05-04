import { IsNotEmpty, IsInt, IsOptional, IsString, IsUrl, IsEnum, IsDateString } from 'class-validator';

export class CreateLiveClassDto {
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

  @IsUrl()
  @IsOptional()
  join_url: string;

  @IsDateString()
  @IsNotEmpty()
  start_datetime: string;

  @IsDateString()
  @IsNotEmpty()
  end_datetime: string;

  @IsUrl()
  @IsOptional()
  recording_url: string;

  @IsEnum(['scheduled', 'ongoing', 'completed', 'cancelled'])
  @IsOptional()
  status: string;
}

export class UpdateLiveClassDto {
  @IsInt() @IsOptional() batch_id?: number;
  @IsInt() @IsOptional() subject_id?: number;
  @IsInt() @IsOptional() teacher_id?: number;
  @IsString() @IsOptional() title?: string;
  @IsUrl() @IsOptional() join_url?: string;
  @IsDateString() @IsOptional() start_datetime?: string;
  @IsDateString() @IsOptional() end_datetime?: string;
  @IsUrl() @IsOptional() recording_url?: string;
  @IsEnum(['scheduled', 'ongoing', 'completed', 'cancelled']) @IsOptional() status?: string;
}
