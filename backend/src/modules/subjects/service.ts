import { Injectable } from '@nestjs/common';
import { SubjectsRepository } from './repository';

@Injectable()
export class SubjectsService {
  constructor(private readonly repository: SubjectsRepository) {}
}
