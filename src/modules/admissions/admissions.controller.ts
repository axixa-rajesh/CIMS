import { Controller } from '@nestjs/common';
import { AdmissionService } from './admissions.service';

@Controller('admissions')
export class AdmissionController {
  constructor(private readonly admissionService: AdmissionService) {}
}
