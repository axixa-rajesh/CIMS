import { Injectable } from '@nestjs/common';
import { AdmissionLeadsRepository } from './repository';

@Injectable()
export class AdmissionLeadsService {
  constructor(private readonly repository: AdmissionLeadsRepository) {}
}
