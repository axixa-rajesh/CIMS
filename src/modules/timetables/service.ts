import { Injectable } from '@nestjs/common';
import { TimetablesRepository } from './repository';
import { CreateTimetableDto } from './dto/create.dto';

@Injectable()
export class TimetablesService {
  constructor(private readonly repository: TimetablesRepository) {}

  create(createDto: CreateTimetableDto) {
    return 'This action adds a new timetables';
  }

  findAll() {
    return `This action returns all timetables`;
  }
}
