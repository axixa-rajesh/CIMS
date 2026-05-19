import { Controller, Get } from '@nestjs/common';

@Controller('exports')
export class ExportController {

  @Get()
  exportData() {
    return { success: true, message: 'export - coming soon' };
  }

}