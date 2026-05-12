export class CreateResultDto {
  student_id!: string;
  test_id!: string;
  batch_id!: string;
  total_marks!: number;
  obtained_marks!: number;
  percentage!: number;
  grade!: string;
}