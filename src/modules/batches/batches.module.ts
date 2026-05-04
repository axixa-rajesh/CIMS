import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Batch } from './entities/batch.entity';
import { BatchStudent } from './entities/batch-student.entity';
import { BatchTeacher } from './entities/batch-teacher.entity';
import { BatchController } from './batches.controller';
import { BatchService } from './batches.service';

@Module({
  imports: [TypeOrmModule.forFeature([Batch, BatchStudent, BatchTeacher])],
  controllers: [BatchController],
  providers: [BatchService],
  exports: [BatchService],
})
export class BatchesModule {}
