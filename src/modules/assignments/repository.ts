import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
// import { Assignment } from './entities/assignment.entity';

@Injectable()
export class AssignmentsRepository {
  constructor(private dataSource: DataSource) {}
  
  // Custom query methods here
}
