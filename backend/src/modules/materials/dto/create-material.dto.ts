import { IsNotEmpty, IsInt, IsOptional, IsString, IsEnum, IsUrl } from 'class-validator';

export class CreateMaterialDto {
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

  @IsEnum(['pdf', 'video', 'document', 'link', 'other'])
  @IsOptional()
  material_type: string;

  @IsUrl()
  @IsOptional()
  file_url: string;

  @IsUrl()
  @IsOptional()
  video_url: string;

  @IsEnum(['active', 'inactive'])
  @IsOptional()
  status: string;
}

export class UpdateMaterialDto {
  @IsInt() @IsOptional() subject_id?: number;
  @IsInt() @IsOptional() teacher_id?: number;
  @IsString() @IsOptional() title?: string;
  @IsString() @IsOptional() description?: string;
  @IsEnum(['pdf', 'video', 'document', 'link', 'other']) @IsOptional() material_type?: string;
  @IsUrl() @IsOptional() file_url?: string;
  @IsUrl() @IsOptional() video_url?: string;
  @IsEnum(['active', 'inactive']) @IsOptional() status?: string;
}
