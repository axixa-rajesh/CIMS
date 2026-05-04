import { Controller } from '@nestjs/common';
import { CourseService } from './courses.service';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}
}
