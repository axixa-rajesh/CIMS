import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { MaterialsService } from './service';
import { CreateMaterialDto } from './dto/create.dto';

@Controller('materials')
export class MaterialsController {
  constructor(private readonly service: MaterialsService) {}

  @Post()
  create(@Body() createDto: CreateMaterialDto) {
    return this.service.create(createDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
