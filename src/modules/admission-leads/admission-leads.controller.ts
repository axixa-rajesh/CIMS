import { Controller } from '@nestjs/common';
import { AdmissionLeadService } from './admission-leads.service';

@Controller('admission-leads')
export class AdmissionLeadController {
  constructor(private readonly admissionLeadService: AdmissionLeadService) {}
}
