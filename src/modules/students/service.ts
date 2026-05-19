import { Injectable } from '@nestjs/common';
import { StudentsRepository } from './repository';

@Injectable()
export class StudentsService {
  constructor(private readonly repository: StudentsRepository) {}
}
