import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { ClassroomsService } from './service';
import { CreateClassRoomDto } from './dto/create.dto';

@Controller('classrooms')
export class ClassroomsController {
  constructor(private readonly service: ClassroomsService) {}

  @Post()
  create(@Body() createDto: CreateClassRoomDto) {
    return this.service.create(createDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
