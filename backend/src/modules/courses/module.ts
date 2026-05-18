import { Module } from '@nestjs/common';
import { CoursesController } from './controller';
import { CoursesService } from './service';
import { CoursesRepository } from './repository';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService, CoursesRepository],
})
export class CoursesModule {}
