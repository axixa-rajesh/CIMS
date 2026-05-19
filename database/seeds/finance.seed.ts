import { AppDataSource } from '../../src/database/data-source';
import { FeeStructure } from '../../src/modules/fee_structure/entities/fee_structure.entity';
import { StudentFeePlan } from '../../src/modules/student_fee_plan/entities/student_fee_plan.entity';
import { Invoice } from '../../src/modules/invoice/entities/invoice.entity';
import { Payment } from '../../src/modules/payment/entities/payment.entity';
import { Receipt } from '../../src/modules/receipt/entities/receipt.entity';
import { ReportExport } from '../../src/modules/report/entities/report_export.entity';

async function seed() {
  try {
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');

    const feeStructureRepo = AppDataSource.getRepository(FeeStructure);
    const studentFeePlanRepo = AppDataSource.getRepository(StudentFeePlan);
    const invoiceRepo = AppDataSource.getRepository(Invoice);
    const paymentRepo = AppDataSource.getRepository(Payment);
    const receiptRepo = AppDataSource.getRepository(Receipt);
    const reportExportRepo = AppDataSource.getRepository(ReportExport);

    // 1. Fee Structures
    const feeStructures = [
      { id: 1, course_id: 1, institute_id: 1, branch_id: 1, name: 'JEE Annual Fee', total_amount: 85000, installment_count: 4, status: 'ACTIVE' },
      { id: 2, course_id: 2, institute_id: 1, branch_id: 1, name: 'NEET Annual Fee', total_amount: 75000, installment_count: 3, status: 'ACTIVE' },
      { id: 3, course_id: 3, institute_id: 1, branch_id: 1, name: 'Foundation Fee', total_amount: 45000, installment_count: 2, status: 'ACTIVE' },
    ];

    console.log('Seeding Fee Structures...');
    for (const fs of feeStructures) {
      const exists = await feeStructureRepo.findOneBy({ id: fs.id });
      if (!exists) {
        await feeStructureRepo.save(fs);
        console.log(`- Fee Structure "${fs.name}" created.`);
      } else {
        console.log(`- Fee Structure "${fs.name}" already exists.`);
      }
    }

    // 2. Student Fee Plans
    const studentFeePlans = [
      { id: 1, student_id: 1, fee_structure_id: 1, session_id: 1, batch_id: 1, discount_amount: 0, final_amount: 85000, status: 'ACTIVE' },
      { id: 2, student_id: 2, fee_structure_id: 1, session_id: 1, batch_id: 1, discount_amount: 5000, final_amount: 80000, status: 'ACTIVE' },
      { id: 3, student_id: 3, fee_structure_id: 2, session_id: 1, batch_id: 2, discount_amount: 0, final_amount: 75000, status: 'ACTIVE' },
      { id: 4, student_id: 4, fee_structure_id: 2, session_id: 1, batch_id: 2, discount_amount: 5000, final_amount: 70000, status: 'ACTIVE' },
      { id: 5, student_id: 5, fee_structure_id: 3, session_id: 1, batch_id: 1, discount_amount: 0, final_amount: 45000, status: 'ACTIVE' },
    ];

    console.log('Seeding Student Fee Plans...');
    for (const sfp of studentFeePlans) {
      const exists = await studentFeePlanRepo.findOneBy({ id: sfp.id });
      if (!exists) {
        await studentFeePlanRepo.save(sfp);
        console.log(`- Student Fee Plan for Student ID ${sfp.student_id} created.`);
      } else {
        console.log(`- Student Fee Plan for Student ID ${sfp.student_id} already exists.`);
      }
    }

    // 3. Invoices
    const today = new Date();
    const invoiceDate = new Date();
    invoiceDate.setDate(today.getDate() - 30);
    const dueDate = new Date();
    dueDate.setDate(today.getDate() + 15);

    const invoices = [
      { id: 1, student_id: 1, student_fee_plan_id: 1, invoice_no: 'INV-2024-001', invoice_date: invoiceDate, due_date: dueDate, total_amount: 85000, discount_amount: 0, net_amount: 85000, payment_status: 'PAID', status: 'ACTIVE', branch_id: 1, session_id: 1 },
      { id: 2, student_id: 2, student_fee_plan_id: 2, invoice_no: 'INV-2024-002', invoice_date: invoiceDate, due_date: dueDate, total_amount: 85000, discount_amount: 5000, net_amount: 80000, payment_status: 'PARTIAL', status: 'ACTIVE', branch_id: 1, session_id: 1 },
      { id: 3, student_id: 3, student_fee_plan_id: 3, invoice_no: 'INV-2024-003', invoice_date: invoiceDate, due_date: dueDate, total_amount: 75000, discount_amount: 0, net_amount: 75000, payment_status: 'UNPAID', status: 'ACTIVE', branch_id: 1, session_id: 1 },
      { id: 4, student_id: 4, student_fee_plan_id: 4, invoice_no: 'INV-2024-004', invoice_date: invoiceDate, due_date: dueDate, total_amount: 75000, discount_amount: 5000, net_amount: 70000, payment_status: 'UNPAID', status: 'ACTIVE', branch_id: 1, session_id: 1 },
      { id: 5, student_id: 5, student_fee_plan_id: 5, invoice_no: 'INV-2024-005', invoice_date: invoiceDate, due_date: dueDate, total_amount: 45000, discount_amount: 0, net_amount: 45000, payment_status: 'PAID', status: 'ACTIVE', branch_id: 1, session_id: 1 },
    ];

    console.log('Seeding Invoices...');
    for (const inv of invoices) {
      await invoiceRepo.save(inv);
      console.log(`- Invoice ${inv.invoice_no} updated/created.`);
    }

    // 4. Payments
    const payments = [
      { id: 1, student_id: 1, invoice_id: 1, payment_date: today, paid_amount: 85000, payment_mode: 'ONLINE', received_by_user_id: 1, status: 'ACTIVE' },
      { id: 2, student_id: 2, invoice_id: 2, payment_date: today, paid_amount: 40000, payment_mode: 'CASH', received_by_user_id: 1, status: 'ACTIVE' },
      { id: 3, student_id: 5, invoice_id: 5, payment_date: today, paid_amount: 45000, payment_mode: 'UPI', received_by_user_id: 1, status: 'ACTIVE' },
    ];

    console.log('Seeding Payments...');
    for (const pay of payments) {
      await paymentRepo.save(pay);
      console.log(`- Payment of ${pay.paid_amount} for Invoice ID ${pay.invoice_id} updated/created.`);
    }

    // 5. Receipts
    const receipts = [
      { id: 1, payment_id: 1, receipt_no: 'RCP-2024-001', receipt_date: today, issued_by_user_id: 1 },
      { id: 2, payment_id: 2, receipt_no: 'RCP-2024-002', receipt_date: today, issued_by_user_id: 1 },
      { id: 3, payment_id: 3, receipt_no: 'RCP-2024-003', receipt_date: today, issued_by_user_id: 1 },
    ];

    console.log('Seeding Receipts...');
    for (const rec of receipts) {
      const exists = await receiptRepo.findOneBy({ receipt_no: rec.receipt_no });
      if (!exists) {
        await receiptRepo.save(rec);
        console.log(`- Receipt ${rec.receipt_no} created.`);
      } else {
        console.log(`- Receipt ${rec.receipt_no} already exists.`);
      }
    }

    // 6. Report Exports
    const reports = [
      { id: 1, user_id: 1, branch_id: 1, session_id: 1, report_name: 'Fee Collection Report', file_url: 'http://example.com/fee_report.pdf' },
      { id: 2, user_id: 1, branch_id: 1, session_id: 1, report_name: 'Defaulters Report', file_url: 'http://example.com/defaulters_report.pdf' },
    ];

    console.log('Seeding Report Exports...');
    for (const rep of reports) {
      const exists = await reportExportRepo.findOneBy({ id: rep.id });
      if (!exists) {
        await reportExportRepo.save(rep);
        console.log(`- Report Export "${rep.report_name}" created.`);
      } else {
        console.log(`- Report Export "${rep.report_name}" already exists.`);
      }
    }

    console.log('\nSeeding completed successfully!');
  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    await AppDataSource.destroy();
  }
}

seed();
