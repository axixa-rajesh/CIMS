import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeeStructureController } from './feeStructure.controller';
import { FeeStructure } from './entities/fee_structure.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FeeStructure])],
  controllers: [FeeStructureController],
})
export class FeeStructureModule {}