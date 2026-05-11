import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Payment } from './entities/payment.entity';
import { CreatePaymentDto } from './payment.validator';
import { Invoice } from '../invoice/entities/invoice.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>,
    private readonly dataSource: DataSource,
  ) {}

  async findAll(filters?: any): Promise<Payment[]> {
    return await this.paymentRepository.find({
      where: { status: 'ACTIVE', ...filters },
      relations: ['invoice'],
      order: { created_at: 'DESC' },
    });
  }

  async addPayment(dto: CreatePaymentDto): Promise<Payment> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const invoice = await queryRunner.manager.findOne(Invoice, {
        where: { id: dto.invoice_id },
      });

      if (!invoice) {
        throw new NotFoundException(`Invoice with ID ${dto.invoice_id} not found`);
      }

      if (invoice.payment_status === 'PAID') {
        throw new BadRequestException('Invoice is already fully paid');
      }

      // Create Payment
      const payment = queryRunner.manager.create(Payment, {
        ...dto,
        payment_date: new Date(), // Using current date if not provided in DTO
      });
      const savedPayment = await queryRunner.manager.save(payment);

      // Update Invoice Status
      await this.updateInvoiceStatus(queryRunner.manager, invoice.id);

      await queryRunner.commitTransaction();
      return savedPayment;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  async updateInvoiceStatus(manager: any, invoiceId: number): Promise<void> {
    const invoice = await manager.findOne(Invoice, { where: { id: invoiceId } });
    const payments = await manager.find(Payment, {
      where: { invoice_id: invoiceId, status: 'ACTIVE' },
    });

    const totalPaid = payments.reduce((sum, p) => sum + Number(p.paid_amount), 0);

    if (totalPaid >= Number(invoice.net_amount)) {
      invoice.payment_status = 'PAID';
    } else if (totalPaid > 0) {
      invoice.payment_status = 'PARTIAL';
    } else {
      invoice.payment_status = 'UNPAID';
    }

    await manager.save(invoice);
  }
}
