import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { Subject } from './entities/subject.entity';
import { Batch } from './entities/batch.entity';
import { Enrollment } from './entities/enrollment.entity';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto, UpdateSubjectDto, UpdateBatchDto, UpdateEnrollmentDto } from './dto/update-academic.dto';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { CreateBatchDto } from './dto/create-batch.dto';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';

@Injectable()
export class AcademicService {
  constructor(
    @InjectRepository(Course) private courseRepo: Repository<Course>,
    @InjectRepository(Subject) private subjectRepo: Repository<Subject>,
    @InjectRepository(Batch) private batchRepo: Repository<Batch>,
    @InjectRepository(Enrollment) private enrollmentRepo: Repository<Enrollment>,
  ) {}

  // Courses
  createCourse(dto: CreateCourseDto) { return this.courseRepo.save(this.courseRepo.create(dto)); }
  findAllCourses() { return this.courseRepo.find(); }
  async findOneCourse(id: string) {
    const course = await this.courseRepo.findOneBy({ id });
    if (!course) throw new NotFoundException('Course not found');
    return course;
  }
  async updateCourse(id: string, dto: UpdateCourseDto) {
    const course = await this.findOneCourse(id);
    return this.courseRepo.save({ ...course, ...dto });
  }

  // Subjects
  createSubject(dto: CreateSubjectDto) { return this.subjectRepo.save(this.subjectRepo.create(dto)); }
  findAllSubjects() { return this.subjectRepo.find({ relations: ['course'] }); }

  // Batches
  createBatch(dto: CreateBatchDto) { return this.batchRepo.save(this.batchRepo.create(dto)); }
  findAllBatches() { return this.batchRepo.find({ relations: ['course'] }); }

  // Enrollments
  createEnrollment(dto: CreateEnrollmentDto) { return this.enrollmentRepo.save(this.enrollmentRepo.create(dto)); }
  findAllEnrollments() { return this.enrollmentRepo.find({ relations: ['student', 'course', 'batch'] }); }
}
