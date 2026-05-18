import { Module } from '@nestjs/common';
import { SubjectsController } from './controller';
import { SubjectsService } from './service';
import { SubjectsRepository } from './repository';

@Module({
  controllers: [SubjectsController],
  providers: [SubjectsService, SubjectsRepository],
})
export class SubjectsModule {}
