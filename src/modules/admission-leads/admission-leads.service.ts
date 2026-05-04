import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdmissionLead } from './entities/admission-lead.entity';

@Injectable()
export class AdmissionLeadService {
  constructor(
    @InjectRepository(AdmissionLead)
    private readonly admissionLeadRepository: Repository<AdmissionLead>,
  ) {}
}
