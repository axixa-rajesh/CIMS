import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdmissionLead } from './entities/admission-lead.entity';
import { Admission } from './entities/admission.entity';
import { AdmissionLeadService } from './admission-lead.service';
import { AdmissionLeadController } from './admission-lead.controller';
import { AdmissionService } from './admission.service';
import { AdmissionController } from './admission.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AdmissionLead, Admission])],
  controllers: [AdmissionLeadController, AdmissionController],
  providers: [AdmissionLeadService, AdmissionService],
  exports: [AdmissionLeadService, AdmissionService],
})
export class AdmissionModule {}
