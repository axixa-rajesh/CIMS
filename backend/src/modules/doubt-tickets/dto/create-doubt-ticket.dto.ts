export class CreateDoubtTicketDto {
  student_id!: string;
  subject_id!: string;
  teacher_id!: string;
  title!: string;
  description!: string;
  priority!: string;
}