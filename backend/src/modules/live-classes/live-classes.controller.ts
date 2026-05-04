import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LiveClassesService } from './live-classes.service';
import { CreateLiveClassDto, UpdateLiveClassDto } from './dto/create-live-class.dto';

@Controller('live-classes')
export class LiveClassesController {
  constructor(private readonly liveClassesService: LiveClassesService) {}

  @Post()
  create(@Body() createLiveClassDto: CreateLiveClassDto) {
    return this.liveClassesService.create(createLiveClassDto);
  }

  @Get()
  findAll() {
    return this.liveClassesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.liveClassesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLiveClassDto: UpdateLiveClassDto) {
    return this.liveClassesService.update(+id, updateLiveClassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.liveClassesService.remove(+id);
  }
}
