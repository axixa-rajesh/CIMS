import { Controller } from '@nestjs/common';
import { TeacherService } from './teachers.service';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}
}
