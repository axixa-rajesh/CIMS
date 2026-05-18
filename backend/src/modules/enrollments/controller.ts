import { Controller } from '@nestjs/common';
import { EnrollmentsService } from './service';

@Controller('enrollments')
export class EnrollmentsController {
  constructor(private readonly service: EnrollmentsService) {}
}
