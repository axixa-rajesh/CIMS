import { Controller } from '@nestjs/common';
import { AdmissionsService } from './service';

@Controller('admissions')
export class AdmissionsController {
  constructor(private readonly service: AdmissionsService) {}
}
