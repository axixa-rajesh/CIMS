import { Injectable } from '@nestjs/common';
import { TimetablesRepository } from './timetables.repository';
import { CreateTimetableDto, UpdateTimetableDto } from './dto/create-timetable.dto';

@Injectable()
export class TimetablesService {
  constructor(private readonly timetablesRepository: TimetablesRepository) {}

  create(createTimetableDto: CreateTimetableDto) {
    return this.timetablesRepository.save(createTimetableDto);
  }

  findAll() {
    return this.timetablesRepository.find();
  }

  findOne(id: number) {
    return this.timetablesRepository.findOneBy({ id: id as any });
  }

  update(id: number, updateTimetableDto: UpdateTimetableDto) {
    return this.timetablesRepository.update(id, updateTimetableDto);
  }

  remove(id: number) {
    return this.timetablesRepository.delete(id);
  }
}
