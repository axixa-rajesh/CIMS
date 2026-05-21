import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { LeaveRequestsService } from './service';
import { CreateLeaveRequestDto } from './dto/create.dto';

@Controller('leave-requests')
export class LeaveRequestsController {
  constructor(private readonly service: LeaveRequestsService) {}

  @Post()
  create(@Body() createDto: CreateLeaveRequestDto) {
    return this.service.create(createDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
