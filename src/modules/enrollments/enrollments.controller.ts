import { Controller } from '@nestjs/common';
import { EnrollmentService } from './enrollments.service';

@Controller('enrollments')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}
}
