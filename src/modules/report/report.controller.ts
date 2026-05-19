import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ReportService } from './report.service';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@Controller('reports')
@UseGuards(RolesGuard)
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get('fee-collection')
  @Roles('ADMIN', 'ACCOUNTS', 'FINANCE')
  getFeeCollection(@Query() filters: any) {
    return this.reportService.getReportData(filters);
  }

  @Get('defaulters')
  @Roles('ADMIN', 'ACCOUNTS', 'FINANCE')
  getDefaulters(@Query() filters: any) {
    return this.reportService.getReportData({ ...filters, type: 'defaulters' });
  }

  @Get('exports')
  @Roles('ADMIN', 'ACCOUNTS', 'FINANCE')
  getExports(@Query() filters: any) {
    return this.reportService.findAll(filters);
  }
}