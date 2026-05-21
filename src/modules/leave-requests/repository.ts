import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
// import { LeaveRequest } from './entities/leaverequest.entity';

@Injectable()
export class LeaveRequestsRepository {
  constructor(private dataSource: DataSource) {}
  
  // Custom query methods here
}
