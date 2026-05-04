import { Controller } from '@nestjs/common';
import { GuardianService } from './guardians.service';

@Controller('guardians')
export class GuardianController {
  constructor(private readonly guardianService: GuardianService) {}
}
