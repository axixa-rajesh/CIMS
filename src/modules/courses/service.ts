import { Injectable } from '@nestjs/common';
import { CoursesRepository } from './repository';

@Injectable()
export class CoursesService {
  constructor(private readonly repository: CoursesRepository) {}
}
