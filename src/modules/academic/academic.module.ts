import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Subject } from './entities/subject.entity';
import { Batch } from './entities/batch.entity';
import { Enrollment } from './entities/enrollment.entity';
import { BatchStudent } from './entities/batch-student.entity';
import { BatchTeacher } from './entities/batch-teacher.entity';
import { Institute } from './entities/institute.entity';
import { Branch } from './entities/branch.entity';
import { AcademicSession } from './entities/academic-session.entity';
import { AcademicService } from './academic.service';
import { AcademicController } from './academic.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Course, Subject, Batch, Enrollment, BatchStudent, BatchTeacher,
      Institute, Branch, AcademicSession
    ])
  ],
  controllers: [AcademicController],
  providers: [AcademicService],
  exports: [AcademicService],
})
export class AcademicModule {}
