import { Injectable } from '@nestjs/common';
import { TimetableSlotsRepository } from './repository';
import { CreateTimetableSlotDto } from './dto/create.dto';

@Injectable()
export class TimetableSlotsService {
  constructor(private readonly repository: TimetableSlotsRepository) {}

  create(createDto: CreateTimetableSlotDto) {
    return 'This action adds a new timetable-slots';
  }

  findAll() {
    return `This action returns all timetable-slots`;
  }
}
