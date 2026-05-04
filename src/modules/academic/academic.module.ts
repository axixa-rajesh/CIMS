import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Institute } from './entities/institute.entity';
import { Branch } from './entities/branch.entity';
import { AcademicSession } from './entities/academic-session.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Institute, Branch, AcademicSession])],
})
export class AcademicModule {}
