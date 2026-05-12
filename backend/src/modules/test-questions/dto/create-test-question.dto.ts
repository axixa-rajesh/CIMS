export class CreateTestQuestionDto {
  test_id!: string;
  question_text!: string;
  question_type!: string;
  option_a?: string;
  option_b?: string;
  option_c?: string;
  option_d?: string;
  correct_answer!: string;
  marks!: number;
}