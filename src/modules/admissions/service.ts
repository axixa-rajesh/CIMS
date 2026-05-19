import { Injectable } from '@nestjs/common';
import { AdmissionsRepository } from './repository';

@Injectable()
export class AdmissionsService {
  constructor(private readonly repository: AdmissionsRepository) {}
}
