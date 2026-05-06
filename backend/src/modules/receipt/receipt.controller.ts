import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('receipts')
export class ReceiptController {

  @Get()
  getAll() {
    return { success: true, message: 'getAll receipts - coming soon' };
  }

  @Post()
  create(@Body() body: any) {
    return { success: true, message: 'create receipt - coming soon' };
  }

}