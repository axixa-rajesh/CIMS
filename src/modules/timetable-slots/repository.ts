import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
// import { TimetableSlot } from './entities/timetableslot.entity';

@Injectable()
export class TimetableSlotsRepository {
  constructor(private dataSource: DataSource) {}
  
  // Custom query methods here
}
