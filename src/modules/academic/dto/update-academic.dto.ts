import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';
export class UpdateCourseDto extends PartialType(CreateCourseDto) {}

import { CreateSubjectDto } from './create-subject.dto';
export class UpdateSubjectDto extends PartialType(CreateSubjectDto) {}

import { CreateBatchDto } from './create-batch.dto';
export class UpdateBatchDto extends PartialType(CreateBatchDto) {}

import { CreateEnrollmentDto } from './create-enrollment.dto';
export class UpdateEnrollmentDto extends PartialType(CreateEnrollmentDto) {}
