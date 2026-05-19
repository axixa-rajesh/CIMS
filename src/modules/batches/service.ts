import { Injectable } from '@nestjs/common';
import { BatchesRepository } from './repository';

@Injectable()
export class BatchesService {
  constructor(private readonly repository: BatchesRepository) {}
}
