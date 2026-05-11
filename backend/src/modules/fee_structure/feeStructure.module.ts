import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeeStructureController } from './feeStructure.controller';
import { FeeStructure } from './entities/fee_structure.entity';
import { FeeStructureService } from './fee-structure.service';

@Module({
  imports: [TypeOrmModule.forFeature([FeeStructure])],
  controllers: [FeeStructureController],
  providers: [FeeStructureService],
  exports: [FeeStructureService],
})
export class FeeStructureModule {}