import { Controller, Get, Post, Body, Patch, Param, ParseUUIDPipe } from '@nestjs/common';
import { AcademicService } from './academic.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { CreateBatchDto } from './dto/create-batch.dto';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateCourseDto } from './dto/update-academic.dto';

@Controller('academic')
export class AcademicController {
  constructor(private readonly academicService: AcademicService) {}

  @Post('courses')
  createCourse(@Body() dto: CreateCourseDto) { return this.academicService.createCourse(dto); }

  @Get('courses')
  findAllCourses() { return this.academicService.findAllCourses(); }

  @Patch('courses/:id')
  updateCourse(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateCourseDto) {
    return this.academicService.updateCourse(id, dto);
  }

  @Post('subjects')
  createSubject(@Body() dto: CreateSubjectDto) { return this.academicService.createSubject(dto); }

  @Get('subjects')
  findAllSubjects() { return this.academicService.findAllSubjects(); }

  @Post('batches')
  createBatch(@Body() dto: CreateBatchDto) { return this.academicService.createBatch(dto); }

  @Get('batches')
  findAllBatches() { return this.academicService.findAllBatches(); }

  @Post('enrollments')
  createEnrollment(@Body() dto: CreateEnrollmentDto) { return this.academicService.createEnrollment(dto); }

  @Get('enrollments')
  findAllEnrollments() { return this.academicService.findAllEnrollments(); }
}
