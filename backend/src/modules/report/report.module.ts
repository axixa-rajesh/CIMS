import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportController } from './report.controller';
import { ReportExport } from './entities/report_export.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReportExport])],
  controllers: [ReportController],
})
export class ReportModule {}