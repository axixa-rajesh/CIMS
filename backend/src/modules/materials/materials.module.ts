import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialsController } from './materials.controller';
import { MaterialsService } from './materials.service';
import { MaterialsRepository } from './materials.repository';
import { Material } from './entities/material.entity';
import { MaterialBatchMap } from './entities/material-batch-map.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Material, MaterialBatchMap])],
  controllers: [MaterialsController],
  providers: [MaterialsService, MaterialsRepository],
})
export class MaterialsModule {}
