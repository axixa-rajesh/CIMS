import { Controller } from '@nestjs/common';
import { StudentsService } from './service';

@Controller('students')
export class StudentsController {
  constructor(private readonly service: StudentsService) {}
}
