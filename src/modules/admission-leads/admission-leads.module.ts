import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdmissionLead } from './entities/admission-lead.entity';
import { AdmissionLeadController } from './admission-leads.controller';
import { AdmissionLeadService } from './admission-leads.service';

@Module({
  imports: [TypeOrmModule.forFeature([AdmissionLead])],
  controllers: [AdmissionLeadController],
  providers: [AdmissionLeadService],
  exports: [AdmissionLeadService],
})
export class AdmissionLeadsModule {}
