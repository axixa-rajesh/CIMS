import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportController } from './report.controller';
import { ReportExport } from './entities/report_export.entity';
import { ReportService } from './report.service';

@Module({
  imports: [TypeOrmModule.forFeature([ReportExport])],
  controllers: [ReportController],
  providers: [ReportService],
  exports: [ReportService],
})
export class ReportModule {}