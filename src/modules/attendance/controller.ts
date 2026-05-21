import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { AttendanceService } from './service';
import { CreateAttendanceSessionDto } from './dto/create.dto';

@Controller('attendance')
export class AttendanceController {
  constructor(private readonly service: AttendanceService) {}

  @Post()
  create(@Body() createDto: CreateAttendanceSessionDto) {
    return this.service.create(createDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
