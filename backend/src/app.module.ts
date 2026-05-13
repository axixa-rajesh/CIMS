import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FinanceModule } from './modules/finance/finance.module';
import { FeeStructureModule } from './modules/fee_structure/feeStructure.module';
import { StudentFeePlanModule } from './modules/student_fee_plan/studentFeePlan.module';
import { InvoiceModule } from './modules/invoice/invoice.module';
import { PaymentModule } from './modules/payment/payment.module';
import { ReceiptModule } from './modules/receipt/receipt.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ReportModule } from './modules/report/report.module';
import { ExportModule } from './modules/export/export.module';
import { ActivityLogModule } from './modules/activity_log/activity-log.module';
import { DatabaseModule } from './database/database.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '7890',
      database: 'cims',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    FinanceModule,
    FeeStructureModule,
    StudentFeePlanModule,
    InvoiceModule,
    PaymentModule,
    ReceiptModule,
    DashboardModule,
    ReportModule,
    ExportModule,
    ActivityLogModule,
    DatabaseModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
