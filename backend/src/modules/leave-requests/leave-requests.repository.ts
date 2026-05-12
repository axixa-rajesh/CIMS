import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { LeaveRequest } from './entities/leave-request.entity';

@Injectable()
export class LeaveRequestsRepository extends Repository<LeaveRequest> {
  constructor(private dataSource: DataSource) {
    super(LeaveRequest, dataSource.createEntityManager());
  }

  async findPendingRequests() {
    return this.find({
      where: { approval_status: 'pending' },
    });
  }

  async findByStudent(student_id: number) {
    return this.find({
      where: { student_id },
    });
  }
}