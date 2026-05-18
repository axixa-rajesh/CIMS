import { Module } from '@nestjs/common';
import { StudentsController } from './controller';
import { StudentsService } from './service';
import { StudentsRepository } from './repository';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService, StudentsRepository],
})
export class StudentsModule {}
