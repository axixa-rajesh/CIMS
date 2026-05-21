import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { TimetablesService } from './service';
import { CreateTimetableDto } from './dto/create.dto';

@Controller('timetables')
export class TimetablesController {
  constructor(private readonly service: TimetablesService) {}

  @Post()
  create(@Body() createDto: CreateTimetableDto) {
    return this.service.create(createDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
