import { Controller } from '@nestjs/common';
import { StudentService } from './students.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
}
