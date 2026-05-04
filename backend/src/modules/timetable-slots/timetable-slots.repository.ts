import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { TimetableSlot } from './entities/timetable-slot.entity';

@Injectable()
export class TimetableSlotsRepository extends Repository<TimetableSlot> {
  constructor(private dataSource: DataSource) {
    super(TimetableSlot, dataSource.createEntityManager());
  }
}
