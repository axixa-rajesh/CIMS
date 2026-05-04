import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Assignment } from './entities/assignment.entity';

@Injectable()
export class AssignmentsRepository extends Repository<Assignment> {
  constructor(private dataSource: DataSource) {
    super(Assignment, dataSource.createEntityManager());
  }
}
