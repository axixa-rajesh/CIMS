import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './payment.validator';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@Controller('payments')
@UseGuards(RolesGuard)
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get()
  @Roles('ADMIN', 'ACCOUNTS', 'FINANCE')
  findAll() {
    return this.paymentService.findAll();
  }

  @Post()
  @Roles('ADMIN', 'ACCOUNTS')
  addPayment(@Body() dto: CreatePaymentDto) {
    return this.paymentService.addPayment(dto);
  }
}