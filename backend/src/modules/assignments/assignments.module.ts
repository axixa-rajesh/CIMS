import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssignmentsController } from './assignments.controller';
import { AssignmentsService } from './assignments.service';
import { AssignmentsRepository } from './assignments.repository';
import { Assignment } from './entities/assignment.entity';
import { AssignmentSubmission } from './entities/assignment-submission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Assignment, AssignmentSubmission])],
  controllers: [AssignmentsController],
  providers: [AssignmentsService, AssignmentsRepository],
})
export class AssignmentsModule {}
