import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssignmentsController } from './controller';
import { AssignmentsService } from './service';
import { AssignmentsRepository } from './repository';
// Add entity imports here

@Module({
  imports: [TypeOrmModule.forFeature([/* entities */])],
  controllers: [AssignmentsController],
  providers: [AssignmentsService, AssignmentsRepository],
  exports: [AssignmentsService],
})
export class AssignmentsModule {}
