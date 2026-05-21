import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LiveClassesController } from './controller';
import { LiveClassesService } from './service';
import { LiveClassesRepository } from './repository';
// Add entity imports here

@Module({
  imports: [TypeOrmModule.forFeature([/* entities */])],
  controllers: [LiveClassesController],
  providers: [LiveClassesService, LiveClassesRepository],
  exports: [LiveClassesService],
})
export class LiveClassesModule {}
