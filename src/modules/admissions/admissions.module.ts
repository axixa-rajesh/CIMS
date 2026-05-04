import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admission } from './entities/admission.entity';
import { AdmissionController } from './admissions.controller';
import { AdmissionService } from './admissions.service';

@Module({
  imports: [TypeOrmModule.forFeature([Admission])],
  controllers: [AdmissionController],
  providers: [AdmissionService],
  exports: [AdmissionService],
})
export class AdmissionsModule {}
