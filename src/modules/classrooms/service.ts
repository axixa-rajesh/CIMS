import { Injectable } from '@nestjs/common';
import { ClassroomsRepository } from './repository';
import { CreateClassRoomDto } from './dto/create.dto';

@Injectable()
export class ClassroomsService {
  constructor(private readonly repository: ClassroomsRepository) {}

  create(createDto: CreateClassRoomDto) {
    return 'This action adds a new classrooms';
  }

  findAll() {
    return `This action returns all classrooms`;
  }
}
