import { Injectable } from '@nestjs/common';
import { TeachersRepository } from './repository';

@Injectable()
export class TeachersService {
  constructor(private readonly repository: TeachersRepository) {}
}
