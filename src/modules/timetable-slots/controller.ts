import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { TimetableSlotsService } from './service';
import { CreateTimetableSlotDto } from './dto/create.dto';

@Controller('timetable-slots')
export class TimetableSlotsController {
  constructor(private readonly service: TimetableSlotsService) {}

  @Post()
  create(@Body() createDto: CreateTimetableSlotDto) {
    return this.service.create(createDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
