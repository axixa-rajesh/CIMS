import { Controller } from '@nestjs/common';
import { AdmissionLeadsService } from './service';

@Controller('admission-leads')
export class AdmissionLeadsController {
  constructor(private readonly service: AdmissionLeadsService) {}
}
