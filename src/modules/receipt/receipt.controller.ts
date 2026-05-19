import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ReceiptService } from './receipt.service';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@Controller('receipts')
@UseGuards(RolesGuard)
export class ReceiptController {
  constructor(private readonly receiptService: ReceiptService) {}

  @Get()
  @Roles('ADMIN', 'ACCOUNTS', 'FINANCE')
  findAll() {
    return this.receiptService.findAll();
  }

  @Post('generate/:paymentId')
  @Roles('ADMIN', 'ACCOUNTS')
  generateReceipt(@Param('paymentId') paymentId: number) {
    return this.receiptService.generateReceipt(paymentId);
  }
}