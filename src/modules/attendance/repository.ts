import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
// import { AttendanceSession } from './entities/attendancesession.entity';

@Injectable()
export class AttendanceRepository {
  constructor(private dataSource: DataSource) {}
  
  // Custom query methods here
}
