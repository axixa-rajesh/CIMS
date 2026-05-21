import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimetableSlotsController } from './controller';
import { TimetableSlotsService } from './service';
import { TimetableSlotsRepository } from './repository';
// Add entity imports here

@Module({
  imports: [TypeOrmModule.forFeature([/* entities */])],
  controllers: [TimetableSlotsController],
  providers: [TimetableSlotsService, TimetableSlotsRepository],
  exports: [TimetableSlotsService],
})
export class TimetableSlotsModule {}
