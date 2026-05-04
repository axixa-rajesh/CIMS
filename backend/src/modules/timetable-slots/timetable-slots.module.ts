import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimetableSlotsController } from './timetable-slots.controller';
import { TimetableSlotsService } from './timetable-slots.service';
import { TimetableSlotsRepository } from './timetable-slots.repository';
import { TimetableSlot } from './entities/timetable-slot.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TimetableSlot])],
  controllers: [TimetableSlotsController],
  providers: [TimetableSlotsService, TimetableSlotsRepository],
})
export class TimetableSlotsModule {}
