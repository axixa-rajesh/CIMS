import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimetablesController } from './controller';
import { TimetablesService } from './service';
import { TimetablesRepository } from './repository';
// Add entity imports here

@Module({
  imports: [TypeOrmModule.forFeature([/* entities */])],
  controllers: [TimetablesController],
  providers: [TimetablesService, TimetablesRepository],
  exports: [TimetablesService],
})
export class TimetablesModule {}
