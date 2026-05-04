import { Injectable } from '@nestjs/common';
import { TimetableSlotsRepository } from './timetable-slots.repository';
import { CreateTimetableSlotDto, UpdateTimetableSlotDto } from './dto/create-timetable-slot.dto';

@Injectable()
export class TimetableSlotsService {
  constructor(private readonly timetableSlotsRepository: TimetableSlotsRepository) {}

  create(createTimetableSlotDto: CreateTimetableSlotDto) {
    return this.timetableSlotsRepository.save(createTimetableSlotDto);
  }

  findAll() {
    return this.timetableSlotsRepository.find();
  }

  findOne(id: number) {
    return this.timetableSlotsRepository.findOneBy({ id: id as any });
  }

  update(id: number, updateTimetableSlotDto: UpdateTimetableSlotDto) {
    return this.timetableSlotsRepository.update(id, updateTimetableSlotDto);
  }

  remove(id: number) {
    return this.timetableSlotsRepository.delete(id);
  }
}
