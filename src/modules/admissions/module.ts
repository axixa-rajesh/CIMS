import { Module } from '@nestjs/common';
import { AdmissionsController } from './controller';
import { AdmissionsService } from './service';
import { AdmissionsRepository } from './repository';

@Module({
  controllers: [AdmissionsController],
  providers: [AdmissionsService, AdmissionsRepository],
})
export class AdmissionsModule {}
