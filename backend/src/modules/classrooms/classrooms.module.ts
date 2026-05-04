import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassroomsController } from './classrooms.controller';
import { ClassroomsService } from './classrooms.service';
import { ClassroomsRepository } from './classrooms.repository';
import { Classroom } from './entities/classroom.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Classroom])],
  controllers: [ClassroomsController],
  providers: [ClassroomsService, ClassroomsRepository],
})
export class ClassroomsModule {}
