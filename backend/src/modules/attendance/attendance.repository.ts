import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { AttendanceSession } from './entities/attendance-session.entity';

@Injectable()
export class AttendanceRepository extends Repository<AttendanceSession> {
  constructor(private dataSource: DataSource) {
    super(AttendanceSession, dataSource.createEntityManager());
  }
}
