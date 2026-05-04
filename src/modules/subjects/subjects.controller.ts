import { Controller } from '@nestjs/common';
import { SubjectService } from './subjects.service';

@Controller('subjects')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}
}
