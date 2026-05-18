import { Module } from '@nestjs/common';
import { TeachersController } from './controller';
import { TeachersService } from './service';
import { TeachersRepository } from './repository';

@Module({
  controllers: [TeachersController],
  providers: [TeachersService, TeachersRepository],
})
export class TeachersModule {}
