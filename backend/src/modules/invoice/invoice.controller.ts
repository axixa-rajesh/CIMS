import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';

@Controller('invoices')
export class InvoiceController {

  @Get()
  getAll() {
    return { success: true, message: 'getAll invoices - coming soon' };
  }

  @Post()
  create(@Body() body: any) {
    return { success: true, message: 'create invoice - coming soon' };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return { success: true, message: 'update invoice - coming soon' };
  }

}