import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Receipt } from './entities/receipt.entity';
import { Payment } from '../payment/entities/payment.entity';

@Injectable()
export class ReceiptService {
  constructor(
    @InjectRepository(Receipt)
    private readonly receiptRepository: Repository<Receipt>,
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) {}

  async findAll(filters?: any): Promise<Receipt[]> {
    return await this.receiptRepository.find({
      where: filters,
      relations: ['payment', 'payment.invoice'],
      order: { created_at: 'DESC' },
    });
  }

  async generateReceipt(paymentId: number): Promise<Receipt> {
    const payment = await this.paymentRepository.findOne({
      where: { id: paymentId },
    });

    if (!payment) {
      throw new NotFoundException(`Payment with ID ${paymentId} not found`);
    }

    // Check if receipt already exists
    const existingReceipt = await this.receiptRepository.findOne({
      where: { payment_id: paymentId },
    });
    if (existingReceipt) {
      return existingReceipt;
    }

    const receiptNo = await this.generateReceiptNo();
    const record = this.receiptRepository.create({
      payment_id: paymentId,
      receipt_no: receiptNo,
      receipt_date: new Date(),
    });

    return await this.receiptRepository.save(record);
  }

  private async generateReceiptNo(): Promise<string> {
    const lastReceipt = await this.receiptRepository.findOne({
      where: {},
      order: { id: 'DESC' },
    });
    const nextId = lastReceipt ? lastReceipt.id + 1 : 1;
    return `RCP-${new Date().getFullYear()}-${nextId.toString().padStart(5, '0')}`;
  }
}
