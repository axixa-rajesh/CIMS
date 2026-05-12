import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReportExport } from './entities/report_export.entity';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(ReportExport)
    private readonly reportExportRepository: Repository<ReportExport>,
  ) {}

  async findAll(filters?: any): Promise<ReportExport[]> {
    return await this.reportExportRepository.find({
      where: filters,
      order: { exported_at: 'DESC' },
    });
  }

  async getReportData(filters: any) {
    // Logic to fetch complex report data would go here
    // For now, returning a message or simple find
    return {
      message: 'Report data fetch logic to be implemented based on requirements',
      filters,
    };
  }

  async saveExportLog(data: any): Promise<ReportExport> {
    const log = this.reportExportRepository.create(data as object);
    return await this.reportExportRepository.save(log as ReportExport);
  }
}
