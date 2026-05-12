import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThan, Not } from 'typeorm';
import { Invoice } from './entities/invoice.entity';
import { CreateInvoiceDto } from './invoice.validator';

export interface InvoiceFilters {
  branch_id?: number;
  session_id?: number;
  batch_id?: number;
  student_id?: number;
  course_id?: number;
  payment_status?: string;
}

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private readonly invoiceRepository: Repository<Invoice>,
  ) {}

  async findAll(filters: InvoiceFilters = {}): Promise<Invoice[]> {
    const where: any = { status: 'ACTIVE' };
    if (filters.branch_id) where.branch_id = filters.branch_id;
    if (filters.session_id) where.session_id = filters.session_id;
    if (filters.batch_id) where.batch_id = filters.batch_id;
    if (filters.student_id) where.student_id = filters.student_id;
    if (filters.course_id) where.course_id = filters.course_id;
    if (filters.payment_status) where.payment_status = filters.payment_status;

    return await this.invoiceRepository.find({
      where,
      relations: ['studentFeePlan'],
      order: { created_at: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Invoice> {
    const record = await this.invoiceRepository.findOne({
      where: { id },
      relations: ['studentFeePlan'],
    });
    if (!record) {
      throw new NotFoundException(`Invoice with ID ${id} not found`);
    }
    return record;
  }

  async generateInvoice(dto: CreateInvoiceDto): Promise<Invoice> {
    const invoiceNo = await this.generateInvoiceNo();
    const record = this.invoiceRepository.create({
      ...dto,
      invoice_no: invoiceNo,
    });
    return await this.invoiceRepository.save(record);
  }

  async getDueInvoices(filters: Pick<InvoiceFilters, 'branch_id' | 'session_id' | 'batch_id'> = {}): Promise<Invoice[]> {
    const where: any = {
      payment_status: Not('PAID'),
      status: 'ACTIVE',
      due_date: MoreThan(new Date()),
    };

    if (filters.branch_id) where.branch_id = filters.branch_id;
    if (filters.session_id) where.session_id = filters.session_id;
    if (filters.batch_id) where.batch_id = filters.batch_id;

    return await this.invoiceRepository.find({
      where,
      order: { due_date: 'ASC' },
    });
  }

  private async generateInvoiceNo(): Promise<string> {
    const lastInvoice = await this.invoiceRepository.findOne({
      where: {},
      order: { id: 'DESC' },
    });
    const nextId = lastInvoice ? lastInvoice.id + 1 : 1;
    return `INV-${new Date().getFullYear()}-${nextId.toString().padStart(5, '0')}`;
  }
}
