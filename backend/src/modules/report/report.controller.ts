import { Controller, Get } from '@nestjs/common';

@Controller('reports')
export class ReportController {

  @Get('fees')
  feesReport() {
    return { success: true, message: 'fees report - coming soon' };
  }

  @Get('payments')
  paymentsReport() {
    return { success: true, message: 'payments report - coming soon' };
  }

}