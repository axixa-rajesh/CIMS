import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import * as FinanceQueries from '../finance/queries/finance-summary.query';

@Injectable()
export class DashboardService {
  constructor(private readonly dataSource: DataSource) {}

  async getSummary(filter: FinanceQueries.FinanceSummaryFilter) {
    const overall = await FinanceQueries.getFinanceSummary(this.dataSource, filter);
    const monthlyTrend = await FinanceQueries.getMonthlyCollectionTrend(this.dataSource, filter);
    const paymentMode = await FinanceQueries.getPaymentModeBreakdown(this.dataSource, filter);

    return {
      overall,
      monthlyTrend,
      paymentMode,
    };
  }

  async getBatchSummary(filter: any) {
    return await FinanceQueries.getBatchwiseSummary(this.dataSource, filter);
  }

  async getSessionSummary(filter: any) {
    return await FinanceQueries.getSessionwiseSummary(this.dataSource, filter);
  }

  async getDefaulters(filter: any) {
    return await FinanceQueries.getDefaultersList(this.dataSource, filter);
  }
}
