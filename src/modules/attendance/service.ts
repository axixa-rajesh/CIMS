import { Injectable } from '@nestjs/common';
import { AttendanceRepository } from './repository';
import { CreateAttendanceSessionDto } from './dto/create.dto';

@Injectable()
export class AttendanceService {
  constructor(private readonly repository: AttendanceRepository) {}

  create(createDto: CreateAttendanceSessionDto) {
    return 'This action adds a new attendance';
  }

  findAll() {
    return `This action returns all attendance`;
  }
}
