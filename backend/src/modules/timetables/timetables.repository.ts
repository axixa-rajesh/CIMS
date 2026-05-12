import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Timetable } from './entities/timetable.entity';

@Injectable()
export class TimetablesRepository extends Repository<Timetable> {
  constructor(private dataSource: DataSource) {
    super(Timetable, dataSource.createEntityManager());
  }

  async findByTeacher(teacher_id: number) {
    return this.find({
      where: { teacher_id },
    });
  }

  async findByBatch(batch_id: number) {
    return this.find({
      where: { batch_id },
    });
  }
}