import { Controller } from '@nestjs/common';
import { CoursesService } from './service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly service: CoursesService) {}
}
