import { Module } from '@nestjs/common';
import { FeeStructureModule } from '../fee_structure/feeStructure.module';
import { StudentFeePlanModule } from '../student_fee_plan/studentFeePlan.module';
import { InvoiceModule } from '../invoice/invoice.module';
import { PaymentModule } from '../payment/payment.module';
import { ReceiptModule } from '../receipt/receipt.module';

import { ReportModule } from '../report/report.module';
import { ExportModule } from '../export/export.module';

@Module({
  imports: [
    FeeStructureModule,
    StudentFeePlanModule,
    InvoiceModule,
    PaymentModule,
    ReceiptModule,

    ReportModule,
    ExportModule,
  ],
})
export class FinanceModule {}