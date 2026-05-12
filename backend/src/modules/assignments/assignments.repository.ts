import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Assignment } from './entities/assignment.entity';

@Injectable()
export class AssignmentsRepository extends Repository<Assignment> {
  constructor(private dataSource: DataSource) {
    super(Assignment, dataSource.createEntityManager());
  }

  async findPublishedAssignments() {
    return this.find({
      where: { status: 'published' },
    });
  }

  async findByBatch(batch_id: number) {
    return this.find({
      where: { batch_id },
    });
  }
}
