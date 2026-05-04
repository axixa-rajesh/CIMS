import { Injectable } from '@nestjs/common';
import { LeaveRequestsRepository } from './leave-requests.repository';
import { CreateLeaveRequestDto, UpdateLeaveRequestDto } from './dto/create-leave-request.dto';

@Injectable()
export class LeaveRequestsService {
  constructor(private readonly leaveRequestsRepository: LeaveRequestsRepository) {}

  create(createLeaveRequestDto: CreateLeaveRequestDto) {
    return this.leaveRequestsRepository.save(createLeaveRequestDto);
  }

  findAll() {
    return this.leaveRequestsRepository.find();
  }

  findOne(id: number) {
    return this.leaveRequestsRepository.findOneBy({ id: id as any });
  }

  update(id: number, updateLeaveRequestDto: UpdateLeaveRequestDto) {
    return this.leaveRequestsRepository.update(id, updateLeaveRequestDto);
  }

  remove(id: number) {
    return this.leaveRequestsRepository.delete(id);
  }
}
