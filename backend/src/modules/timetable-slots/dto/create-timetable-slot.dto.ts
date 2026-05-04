import { IsNotEmpty, IsString, IsInt, IsOptional, IsBoolean } from 'class-validator';

export class CreateTimetableSlotDto {
  @IsInt()
  @IsNotEmpty()
  branch_id: number;

  @IsString()
  @IsNotEmpty()
  slot_name: string;

  @IsString()
  @IsNotEmpty()
  start_time: string;

  @IsString()
  @IsNotEmpty()
  end_time: string;

  @IsBoolean()
  @IsOptional()
  is_break_slot: boolean;
}

export class UpdateTimetableSlotDto {
  @IsInt()
  @IsOptional()
  branch_id?: number;

  @IsString()
  @IsOptional()
  slot_name?: string;

  @IsString()
  @IsOptional()
  start_time?: string;

  @IsString()
  @IsOptional()
  end_time?: string;

  @IsBoolean()
  @IsOptional()
  is_break_slot?: boolean;
}
