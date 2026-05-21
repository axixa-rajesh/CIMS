import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { AssignmentsService } from './service';
import { CreateAssignmentDto } from './dto/create.dto';

@Controller('assignments')
export class AssignmentsController {
  constructor(private readonly service: AssignmentsService) {}

  @Post()
  create(@Body() createDto: CreateAssignmentDto) {
    return this.service.create(createDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
