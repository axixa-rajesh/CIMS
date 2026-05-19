import { Module } from '@nestjs/common';
import { BatchesController } from './controller';
import { BatchesService } from './service';
import { BatchesRepository } from './repository';

@Module({
  controllers: [BatchesController],
  providers: [BatchesService, BatchesRepository],
})
export class BatchesModule {}
