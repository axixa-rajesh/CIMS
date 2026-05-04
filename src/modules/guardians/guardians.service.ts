import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentGuardian } from './entities/guardian.entity';

@Injectable()
export class GuardianService {
  constructor(
    @InjectRepository(StudentGuardian)
    private readonly guardianRepository: Repository<StudentGuardian>,
  ) {}
}
