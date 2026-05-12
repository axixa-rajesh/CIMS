import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { AttendanceSession } from './entities/attendance-session.entity';

@Injectable()
export class AttendanceRepository extends Repository<AttendanceSession> {
  constructor(private dataSource: DataSource) {
    super(AttendanceSession, dataSource.createEntityManager());
  }

  async findByDate(attendance_date: string) {
    return this.find({
      where: { attendance_date },
    });
  }

  async findByTeacher(teacher_id: number) {
    return this.find({
      where: { teacher_id },
    });
  }
}
