import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';

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
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST') || 'localhost',
        port: configService.get<number>('DB_PORT') || 3306,
        username: configService.get<string>('DB_USER') || 'root',
        password: configService.get<string>('DB_PASS') || '',
        database: configService.get<string>('DB_NAME') || 'cims',
        connectTimeout: 10000,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false,
      }),
      inject: [ConfigService],
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}