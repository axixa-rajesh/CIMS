import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TimetableSlotsService } from './timetable-slots.service';
import { CreateTimetableSlotDto, UpdateTimetableSlotDto } from './dto/create-timetable-slot.dto';

@Controller('timetable-slots')
export class TimetableSlotsController {
  constructor(private readonly timetableSlotsService: TimetableSlotsService) {}

  @Post()
  create(@Body() createTimetableSlotDto: CreateTimetableSlotDto) {
    return this.timetableSlotsService.create(createTimetableSlotDto);
  }

  @Get()
  findAll() {
    return this.timetableSlotsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.timetableSlotsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTimetableSlotDto: UpdateTimetableSlotDto) {
    return this.timetableSlotsService.update(+id, updateTimetableSlotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.timetableSlotsService.remove(+id);
  }
}
