import { Module } from '@nestjs/common';
import { AdmissionLeadsController } from './controller';
import { AdmissionLeadsService } from './service';
import { AdmissionLeadsRepository } from './repository';

@Module({
  controllers: [AdmissionLeadsController],
  providers: [AdmissionLeadsService, AdmissionLeadsRepository],
})
export class AdmissionLeadsModule {}
