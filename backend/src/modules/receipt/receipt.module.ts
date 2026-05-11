import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReceiptController } from './receipt.controller';
import { Receipt } from './entities/receipt.entity';
import { Payment } from '../payment/entities/payment.entity';
import { ReceiptService } from './receipt.service';

@Module({
  imports: [TypeOrmModule.forFeature([Receipt, Payment])],
  controllers: [ReceiptController],
  providers: [ReceiptService],
  exports: [ReceiptService],
})
export class ReceiptModule {}