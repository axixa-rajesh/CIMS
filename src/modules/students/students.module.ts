import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { StudentDocument } from './entities/student-document.entity';
import { StudentController } from './students.controller';
import { StudentService } from './students.service';

@Module({
  imports: [TypeOrmModule.forFeature([Student, StudentDocument])],
  controllers: [StudentController],
  providers: [StudentService],
  exports: [StudentService],
})
export class StudentsModule {}
