import { Injectable } from '@nestjs/common';
import { ClassroomsRepository } from './classrooms.repository';
import { CreateClassroomDto, UpdateClassroomDto } from './dto/create-classroom.dto';

@Injectable()
export class ClassroomsService {
  constructor(private readonly classroomsRepository: ClassroomsRepository) {}

  create(createClassroomDto: CreateClassroomDto) {
    return this.classroomsRepository.save(createClassroomDto);
  }

  findAll() {
    return this.classroomsRepository.find();
  }

  findOne(id: number) {
    return this.classroomsRepository.findOneBy({ id: id as any });
  }

  update(id: number, updateClassroomDto: UpdateClassroomDto) {
    return this.classroomsRepository.update(id, updateClassroomDto);
  }

  remove(id: number) {
    return this.classroomsRepository.delete(id);
  }
}
