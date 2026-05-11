import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentFeePlanController } from './studentFeePlan.controller';
import { StudentFeePlan } from './entities/student_fee_plan.entity';
import { StudentFeePlanService } from './student-fee-plan.service';

@Module({
  imports: [TypeOrmModule.forFeature([StudentFeePlan])],
  controllers: [StudentFeePlanController],
  providers: [StudentFeePlanService],
  exports: [StudentFeePlanService],
})
export class StudentFeePlanModule {}