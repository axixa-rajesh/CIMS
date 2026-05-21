import { Injectable } from '@nestjs/common';
import { LeaveRequestsRepository } from './repository';
import { CreateLeaveRequestDto } from './dto/create.dto';

@Injectable()
export class LeaveRequestsService {
  constructor(private readonly repository: LeaveRequestsRepository) {}

  create(createDto: CreateLeaveRequestDto) {
    return 'This action adds a new leave-requests';
  }

  findAll() {
    return `This action returns all leave-requests`;
  }
}
