import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Classroom } from './entities/classroom.entity';

@Injectable()
export class ClassroomsRepository extends Repository<Classroom> {
  constructor(private dataSource: DataSource) {
    super(Classroom, dataSource.createEntityManager());
  }

  findActiveRooms() {
    return this.find({
      where: { status: 'active' },
    });
  }

  findByBranch(branchId: number) {
    return this.find({
      where: { branch_id: branchId },
    });
  }
}
