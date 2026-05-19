import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './invoice.validator';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@Controller('invoices')
@UseGuards(RolesGuard)
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get()
  @Roles('ADMIN', 'ACCOUNTS', 'FINANCE')
  findAll() {
    return this.invoiceService.findAll();
  }

  @Get('due')
  @Roles('ADMIN', 'ACCOUNTS', 'FINANCE')
  getDueInvoices() {
    return this.invoiceService.getDueInvoices();
  }

  @Get(':id')
  @Roles('ADMIN', 'ACCOUNTS', 'FINANCE')
  findOne(@Param('id') id: number) {
    return this.invoiceService.findOne(id);
  }

  @Post()
  @Roles('ADMIN', 'ACCOUNTS')
  generateInvoice(@Body() dto: CreateInvoiceDto) {
    return this.invoiceService.generateInvoice(dto);
  }
}