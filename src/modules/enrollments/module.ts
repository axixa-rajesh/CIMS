import { Module } from '@nestjs/common';
import { EnrollmentsController } from './controller';
import { EnrollmentsService } from './service';
import { EnrollmentsRepository } from './repository';

@Module({
  controllers: [EnrollmentsController],
  providers: [EnrollmentsService, EnrollmentsRepository],
})
export class EnrollmentsModule {}
