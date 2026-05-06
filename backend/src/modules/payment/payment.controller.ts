import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('payments')
export class PaymentController {

  @Get()
  getAll() {
    return { success: true, message: 'getAll payments - coming soon' };
  }

  @Post()
  create(@Body() body: any) {
    return { success: true, message: 'create payment - coming soon' };
  }

}