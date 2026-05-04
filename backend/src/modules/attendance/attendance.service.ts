import { Injectable } from '@nestjs/common';
import { AttendanceRepository } from './attendance.repository';
import { CreateAttendanceDto, UpdateAttendanceDto } from './dto/create-attendance.dto';

@Injectable()
export class AttendanceService {
  constructor(private readonly attendanceRepository: AttendanceRepository) {}

  create(createAttendanceDto: CreateAttendanceDto) {
    return this.attendanceRepository.save(createAttendanceDto);
  }

  findAll() {
    return this.attendanceRepository.find();
  }

  findOne(id: number) {
    return this.attendanceRepository.findOneBy({ id: id as any });
  }

  update(id: number, updateAttendanceDto: UpdateAttendanceDto) {
    return this.attendanceRepository.update(id, updateAttendanceDto);
  }

  remove(id: number) {
    return this.attendanceRepository.delete(id);
  }
}
