import { Module } from '@nestjs/common';
import { StudentGuardiansController } from './controller';
import { StudentGuardiansService } from './service';
import { StudentGuardiansRepository } from './repository';

@Module({
  controllers: [StudentGuardiansController],
  providers: [StudentGuardiansService, StudentGuardiansRepository],
})
export class StudentGuardiansModule {}
