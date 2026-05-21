import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
// import { Timetable } from './entities/timetable.entity';

@Injectable()
export class TimetablesRepository {
  constructor(private dataSource: DataSource) {}
  
  // Custom query methods here
}
