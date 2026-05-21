import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialsController } from './controller';
import { MaterialsService } from './service';
import { MaterialsRepository } from './repository';
// Add entity imports here

@Module({
  imports: [TypeOrmModule.forFeature([/* entities */])],
  controllers: [MaterialsController],
  providers: [MaterialsService, MaterialsRepository],
  exports: [MaterialsService],
})
export class MaterialsModule {}
