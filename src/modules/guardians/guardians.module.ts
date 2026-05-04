import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentGuardian } from './entities/guardian.entity';
import { GuardianController } from './guardians.controller';
import { GuardianService } from './guardians.service';

@Module({
  imports: [TypeOrmModule.forFeature([StudentGuardian])],
  controllers: [GuardianController],
  providers: [GuardianService],
  exports: [GuardianService],
})
export class GuardiansModule {}
