import { Controller } from '@nestjs/common';
import { StudentGuardiansService } from './service';

@Controller('student-guardians')
export class StudentGuardiansController {
  constructor(private readonly service: StudentGuardiansService) {}
}
