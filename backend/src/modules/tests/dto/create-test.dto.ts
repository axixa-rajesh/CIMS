export class CreateTestDto {
  batch_id!: string;
  subject_id!: string;
  teacher_id!: string;
  title!: string;
  test_type!: string;
  test_date!: Date;
  duration_minutes!: number;
  max_marks!: number;
}