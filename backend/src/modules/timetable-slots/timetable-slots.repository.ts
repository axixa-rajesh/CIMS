import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { TimetableSlot } from './entities/timetable-slot.entity';

@Injectable()
export class TimetableSlotsRepository extends Repository<TimetableSlot> {
  constructor(private dataSource: DataSource) {
    super(TimetableSlot, dataSource.createEntityManager());
  }

  findBreakSlots() {
    return this.find({
      where: { is_break_slot: true },
    });
  }

  findByBranch(branchId: number) {
    return this.find({
      where: { branch_id: branchId },
    });
  }
}