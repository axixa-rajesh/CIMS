import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { LiveClassesService } from './service';
import { CreateLiveClassDto } from './dto/create.dto';

@Controller('live-classes')
export class LiveClassesController {
  constructor(private readonly service: LiveClassesService) {}

  @Post()
  create(@Body() createDto: CreateLiveClassDto) {
    return this.service.create(createDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
