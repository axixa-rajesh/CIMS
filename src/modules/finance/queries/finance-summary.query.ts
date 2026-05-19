import { DataSource } from 'typeorm';

// ─────────────────────────────────────────────
// Filter DTO — batch_id aur session_id optional
// ─────────────────────────────────────────────
export interface FinanceSummaryFilter {
  batch_id?: number;
  session_id?: number;
  branch_id?: number;
  from_date?: string; // YYYY-MM-DD
  to_date?: string;   // YYYY-MM-DD
}

// ─────────────────────────────────────────────
// 1. OVERALL FINANCE SUMMARY
//    - Total invoiced, total collected, total pending
//    - batch/session filter support
// ─────────────────────────────────────────────
export async function getFinanceSummary(
  dataSource: DataSource,
  filter: FinanceSummaryFilter,
) {
  const params: any[] = [];
  const conditions: string[] = ['i.status = "ACTIVE"'];

  if (filter.batch_id) {
    conditions.push(`i.batch_id = ?`);
    params.push(filter.batch_id);
  }

  if (filter.session_id) {
    conditions.push(`i.session_id = ?`);
    params.push(filter.session_id);
  }

  if (filter.branch_id) {
    conditions.push(`i.branch_id = ?`);
    params.push(filter.branch_id);
  }

  if (filter.from_date) {
    conditions.push(`i.invoice_date >= ?`);
    params.push(filter.from_date);
  }

  if (filter.to_date) {
    conditions.push(`i.invoice_date <= ?`);
    params.push(filter.to_date);
  }

  const where = conditions.join(' AND ');

  const sql = `
    SELECT
      COUNT(DISTINCT i.id)                          AS total_invoices,
      COALESCE(SUM(i.net_amount), 0)                AS total_invoiced,
      COALESCE(SUM(p.paid_amount_sum), 0)           AS total_collected,
      COALESCE(SUM(i.net_amount), 0)
        - COALESCE(SUM(p.paid_amount_sum), 0)       AS total_pending,
      COUNT(CASE WHEN i.payment_status = 'PAID'    THEN 1 END) AS paid_invoices,
      COUNT(CASE WHEN i.payment_status = 'PARTIAL' THEN 1 END) AS partial_invoices,
      COUNT(CASE WHEN i.payment_status = 'UNPAID'  THEN 1 END) AS unpaid_invoices
    FROM invoices i
    LEFT JOIN (
      SELECT invoice_id, SUM(paid_amount) AS paid_amount_sum
      FROM payments
      WHERE status = 'ACTIVE'
      GROUP BY invoice_id
    ) p ON p.invoice_id = i.id
    WHERE ${where}
  `;

  const [result] = await dataSource.query(sql, params);
  return result;
}

// ─────────────────────────────────────────────
// 2. BATCH-WISE FEE COLLECTION SUMMARY
//    - Har batch ka total invoiced vs collected
// ─────────────────────────────────────────────
export async function getBatchwiseSummary(
  dataSource: DataSource,
  filter: Pick<FinanceSummaryFilter, 'session_id' | 'branch_id'>,
) {
  const params: any[] = [];
  const conditions: string[] = ['i.status = "ACTIVE"'];

  if (filter.session_id) {
    conditions.push(`i.session_id = ?`);
    params.push(filter.session_id);
  }

  if (filter.branch_id) {
    conditions.push(`i.branch_id = ?`);
    params.push(filter.branch_id);
  }

  const where = conditions.join(' AND ');

  const sql = `
    SELECT
      i.batch_id,
      COUNT(DISTINCT i.id)                        AS total_invoices,
      COALESCE(SUM(i.net_amount), 0)              AS total_invoiced,
      COALESCE(SUM(p.paid_amount_sum), 0)         AS total_collected,
      COALESCE(SUM(i.net_amount), 0)
        - COALESCE(SUM(p.paid_amount_sum), 0)     AS total_pending
    FROM invoices i
    LEFT JOIN (
      SELECT invoice_id, SUM(paid_amount) AS paid_amount_sum
      FROM payments
      WHERE status = 'ACTIVE'
      GROUP BY invoice_id
    ) p ON p.invoice_id = i.id
    WHERE ${where}
    GROUP BY i.batch_id
    ORDER BY i.batch_id
  `;

  return dataSource.query(sql, params);
}

// ─────────────────────────────────────────────
// 3. SESSION-WISE FEE COLLECTION SUMMARY
//    - Har academic session ka total invoiced vs collected
// ─────────────────────────────────────────────
export async function getSessionwiseSummary(
  dataSource: DataSource,
  filter: Pick<FinanceSummaryFilter, 'batch_id' | 'branch_id'>,
) {
  const params: any[] = [];
  const conditions: string[] = ['i.status = "ACTIVE"'];

  if (filter.batch_id) {
    conditions.push(`i.batch_id = ?`);
    params.push(filter.batch_id);
  }

  if (filter.branch_id) {
    conditions.push(`i.branch_id = ?`);
    params.push(filter.branch_id);
  }

  const where = conditions.join(' AND ');

  const sql = `
    SELECT
      i.session_id,
      COUNT(DISTINCT i.id)                        AS total_invoices,
      COALESCE(SUM(i.net_amount), 0)              AS total_invoiced,
      COALESCE(SUM(p.paid_amount_sum), 0)         AS total_collected,
      COALESCE(SUM(i.net_amount), 0)
        - COALESCE(SUM(p.paid_amount_sum), 0)     AS total_pending
    FROM invoices i
    LEFT JOIN (
      SELECT invoice_id, SUM(paid_amount) AS paid_amount_sum
      FROM payments
      WHERE status = 'ACTIVE'
      GROUP BY invoice_id
    ) p ON p.invoice_id = i.id
    WHERE ${where}
    GROUP BY i.session_id
    ORDER BY i.session_id
  `;

  return dataSource.query(sql, params);
}

// ─────────────────────────────────────────────
// 4. MONTHLY COLLECTION TREND
//    - Month-wise kitna collect hua (graph ke liye)
//    - batch/session filter support
// ─────────────────────────────────────────────
export async function getMonthlyCollectionTrend(
  dataSource: DataSource,
  filter: FinanceSummaryFilter,
) {
  const params: any[] = [];
  const conditions: string[] = ['p.status = "ACTIVE"'];

  if (filter.batch_id) {
    conditions.push(`i.batch_id = ?`);
    params.push(filter.batch_id);
  }

  if (filter.session_id) {
    conditions.push(`i.session_id = ?`);
    params.push(filter.session_id);
  }

  if (filter.branch_id) {
    conditions.push(`i.branch_id = ?`);
    params.push(filter.branch_id);
  }

  if (filter.from_date) {
    conditions.push(`p.payment_date >= ?`);
    params.push(filter.from_date);
  }

  if (filter.to_date) {
    conditions.push(`p.payment_date <= ?`);
    params.push(filter.to_date);
  }

  const where = conditions.join(' AND ');

  const sql = `
    SELECT
      DATE_FORMAT(p.payment_date, '%Y-%m')  AS month,
      SUM(p.paid_amount)                    AS collected_amount,
      COUNT(DISTINCT p.id)                  AS payment_count
    FROM payments p
    INNER JOIN invoices i ON i.id = p.invoice_id
    WHERE ${where}
    GROUP BY DATE_FORMAT(p.payment_date, '%Y-%m')
    ORDER BY month ASC
  `;

  return dataSource.query(sql, params);
}

// ─────────────────────────────────────────────
// 5. PAYMENT MODE BREAKDOWN
//    - CASH / UPI / ONLINE / CHEQUE kitna aaya
//    - batch/session filter support
// ─────────────────────────────────────────────
export async function getPaymentModeBreakdown(
  dataSource: DataSource,
  filter: FinanceSummaryFilter,
) {
  const params: any[] = [];
  const conditions: string[] = ['p.status = "ACTIVE"'];

  if (filter.batch_id) {
    conditions.push(`i.batch_id = ?`);
    params.push(filter.batch_id);
  }

  if (filter.session_id) {
    conditions.push(`i.session_id = ?`);
    params.push(filter.session_id);
  }

  if (filter.branch_id) {
    conditions.push(`i.branch_id = ?`);
    params.push(filter.branch_id);
  }

  const where = conditions.join(' AND ');

  const sql = `
    SELECT
      p.payment_mode,
      COUNT(p.id)          AS transaction_count,
      SUM(p.paid_amount)   AS total_amount
    FROM payments p
    INNER JOIN invoices i ON i.id = p.invoice_id
    WHERE ${where}
    GROUP BY p.payment_mode
    ORDER BY total_amount DESC
  `;

  return dataSource.query(sql, params);
}

// ─────────────────────────────────────────────
// 6. DEFAULTERS LIST (pending > 0, due_date past)
//    - batch/session filter support
// ─────────────────────────────────────────────
export async function getDefaultersList(
  dataSource: DataSource,
  filter: FinanceSummaryFilter,
) {
  const params: any[] = [];
  const conditions: string[] = [
    'i.status = "ACTIVE"',
    'i.payment_status != "PAID"',
    'i.due_date < CURDATE()',
  ];

  if (filter.batch_id) {
    conditions.push(`i.batch_id = ?`);
    params.push(filter.batch_id);
  }

  if (filter.session_id) {
    conditions.push(`i.session_id = ?`);
    params.push(filter.session_id);
  }

  if (filter.branch_id) {
    conditions.push(`i.branch_id = ?`);
    params.push(filter.branch_id);
  }

  const where = conditions.join(' AND ');

  const sql = `
    SELECT
      i.student_id,
      i.batch_id,
      i.session_id,
      COUNT(i.id)                                         AS pending_invoices,
      COALESCE(SUM(i.net_amount), 0)                      AS total_invoiced,
      COALESCE(SUM(p.paid_amount_sum), 0)                 AS total_paid,
      COALESCE(SUM(i.net_amount), 0)
        - COALESCE(SUM(p.paid_amount_sum), 0)             AS total_due,
      MIN(i.due_date)                                     AS oldest_due_date
    FROM invoices i
    LEFT JOIN (
      SELECT invoice_id, SUM(paid_amount) AS paid_amount_sum
      FROM payments
      WHERE status = 'ACTIVE'
      GROUP BY invoice_id
    ) p ON p.invoice_id = i.id
    WHERE ${where}
    GROUP BY i.student_id, i.batch_id, i.session_id
    ORDER BY total_due DESC
  `;

  return dataSource.query(sql, params);
}
