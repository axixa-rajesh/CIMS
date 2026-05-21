import { Injectable } from '@nestjs/common';
import { LiveClassesRepository } from './repository';
import { CreateLiveClassDto } from './dto/create.dto';

@Injectable()
export class LiveClassesService {
  constructor(private readonly repository: LiveClassesRepository) {}

  create(createDto: CreateLiveClassDto) {
    return 'This action adds a new live-classes';
  }

  findAll() {
    return `This action returns all live-classes`;
  }
}
