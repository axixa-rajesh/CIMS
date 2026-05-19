import { Controller } from '@nestjs/common';
import { SubjectsService } from './service';

@Controller('subjects')
export class SubjectsController {
  constructor(private readonly service: SubjectsService) {}
}
