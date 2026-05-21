import { Injectable } from '@nestjs/common';
import { AssignmentsRepository } from './repository';
import { CreateAssignmentDto } from './dto/create.dto';

@Injectable()
export class AssignmentsService {
  constructor(private readonly repository: AssignmentsRepository) {}

  create(createDto: CreateAssignmentDto) {
    return 'This action adds a new assignments';
  }

  findAll() {
    return `This action returns all assignments`;
  }
}
