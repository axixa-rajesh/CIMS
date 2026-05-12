import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { LiveClass } from './entities/live-class.entity';

@Injectable()
export class LiveClassesRepository extends Repository<LiveClass> {
  constructor(private dataSource: DataSource) {
    super(LiveClass, dataSource.createEntityManager());
  }

  async findScheduledClasses() {
    return this.find({
      where: { status: 'scheduled' },
    });
  }

  async findByTeacher(teacher_id: number) {
    return this.find({
      where: { teacher_id },
    });
  }
}
