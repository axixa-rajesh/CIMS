import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admission } from './entities/admission.entity';

@Injectable()
export class AdmissionService {
  constructor(
    @InjectRepository(Admission)
    private readonly admissionRepository: Repository<Admission>,
  ) {}
}
