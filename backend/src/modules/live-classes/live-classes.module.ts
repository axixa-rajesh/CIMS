import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LiveClassesController } from './live-classes.controller';
import { LiveClassesService } from './live-classes.service';
import { LiveClassesRepository } from './live-classes.repository';
import { LiveClass } from './entities/live-class.entity';
import { LiveClassParticipant } from './entities/live-class-participant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LiveClass, LiveClassParticipant])],
  controllers: [LiveClassesController],
  providers: [LiveClassesService, LiveClassesRepository],
})
export class LiveClassesModule {}
