import { Injectable } from '@nestjs/common';
import { StudentGuardiansRepository } from './repository';

@Injectable()
export class StudentGuardiansService {
  constructor(private readonly repository: StudentGuardiansRepository) {}
}
