import { Injectable } from '@nestjs/common';
import { AssignmentsRepository } from './assignments.repository';
import { CreateAssignmentDto, UpdateAssignmentDto } from './dto/create-assignment.dto';

@Injectable()
export class AssignmentsService {
  constructor(private readonly assignmentsRepository: AssignmentsRepository) {}

  create(createAssignmentDto: CreateAssignmentDto) {
    return this.assignmentsRepository.save(createAssignmentDto);
  }

  findAll() {
    return this.assignmentsRepository.find();
  }

  findOne(id: number) {
    return this.assignmentsRepository.findOneBy({ id: id as any });
  }

  update(id: number, updateAssignmentDto: UpdateAssignmentDto) {
    return this.assignmentsRepository.update(id, updateAssignmentDto);
  }

  remove(id: number) {
    return this.assignmentsRepository.delete(id);
  }
}
