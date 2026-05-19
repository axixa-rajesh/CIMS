import { Injectable } from '@nestjs/common';
import { EnrollmentsRepository } from './repository';

@Injectable()
export class EnrollmentsService {
  constructor(private readonly repository: EnrollmentsRepository) {}
}
