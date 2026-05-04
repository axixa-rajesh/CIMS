import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { LeaveRequest } from './entities/leave-request.entity';

@Injectable()
export class LeaveRequestsRepository extends Repository<LeaveRequest> {
  constructor(private dataSource: DataSource) {
    super(LeaveRequest, dataSource.createEntityManager());
  }
}
