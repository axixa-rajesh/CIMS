import { Controller } from '@nestjs/common';
import { TeachersService } from './service';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly service: TeachersService) {}
}
