import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentFeePlanController } from './studentFeePlan.controller';
import { StudentFeePlan } from './entities/student_fee_plan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudentFeePlan])],
  controllers: [StudentFeePlanController],
})
export class StudentFeePlanModule {}