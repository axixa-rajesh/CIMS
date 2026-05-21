import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1779344770078 implements MigrationInterface {
    name = 'Init1779344770078'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`teachers\` (\`id\` varchar(36) NOT NULL, \`institute_id\` varchar(36) NOT NULL, \`branch_id\` varchar(36) NOT NULL, \`user_id\` varchar(36) NULL, \`employee_code\` varchar(255) NOT NULL, \`first_name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`phone\` varchar(255) NULL, \`email\` varchar(255) NULL, \`qualification\` text NULL, \`joining_date\` date NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_1882c07aedb478aca672340c82\` (\`employee_code\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_roles\` (\`id\` varchar(36) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`student_documents\` (\`id\` varchar(36) NOT NULL, \`student_id\` varchar(36) NOT NULL, \`document_type\` varchar(255) NOT NULL, \`document_name\` varchar(255) NOT NULL, \`file_url\` text NOT NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`students\` (\`id\` varchar(36) NOT NULL, \`institute_id\` varchar(36) NOT NULL, \`branch_id\` varchar(36) NOT NULL, \`user_id\` varchar(36) NULL, \`admission_no\` varchar(255) NULL, \`roll_no\` varchar(255) NULL, \`first_name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`gender\` varchar(255) NULL, \`dob\` date NULL, \`email\` varchar(255) NULL, \`phone\` varchar(255) NULL, \`address\` text NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`fee_structures\` (\`id\` int NOT NULL AUTO_INCREMENT, \`course_id\` int NOT NULL, \`institute_id\` int NULL, \`branch_id\` int NULL, \`name\` varchar(255) NOT NULL, \`total_amount\` decimal(10,2) NOT NULL, \`installment_count\` int NOT NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`student_fee_plans\` (\`id\` int NOT NULL AUTO_INCREMENT, \`student_id\` int NOT NULL, \`batch_id\` int NULL, \`session_id\` int NULL, \`fee_structure_id\` int NOT NULL, \`discount_amount\` decimal(10,2) NOT NULL DEFAULT '0.00', \`final_amount\` decimal(10,2) NOT NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`roles\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`report_exports\` (\`id\` int NOT NULL AUTO_INCREMENT, \`user_id\` int NOT NULL, \`branch_id\` int NULL, \`session_id\` int NULL, \`report_name\` varchar(255) NOT NULL, \`filter_json\` text NULL, \`file_url\` text NOT NULL, \`exported_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role_permissions\` (\`id\` varchar(36) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`invoices\` (\`id\` int NOT NULL AUTO_INCREMENT, \`student_id\` int NOT NULL, \`batch_id\` int NULL, \`session_id\` int NULL, \`branch_id\` int NULL, \`course_id\` int NULL, \`student_fee_plan_id\` int NULL, \`invoice_no\` varchar(255) NOT NULL, \`invoice_date\` date NOT NULL, \`total_amount\` decimal(10,2) NOT NULL, \`discount_amount\` decimal(10,2) NOT NULL DEFAULT '0.00', \`net_amount\` decimal(10,2) NOT NULL, \`due_date\` date NULL, \`payment_status\` varchar(255) NOT NULL DEFAULT 'UNPAID', \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_37669c562a2525929927d9d691\` (\`invoice_no\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`payments\` (\`id\` int NOT NULL AUTO_INCREMENT, \`student_id\` int NOT NULL, \`invoice_id\` int NOT NULL, \`payment_date\` date NOT NULL, \`paid_amount\` decimal(10,2) NOT NULL, \`payment_mode\` varchar(255) NOT NULL, \`transaction_ref_no\` varchar(255) NULL, \`received_by_user_id\` int NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`receipts\` (\`id\` int NOT NULL AUTO_INCREMENT, \`payment_id\` int NOT NULL, \`receipt_no\` varchar(255) NOT NULL, \`receipt_date\` date NOT NULL, \`receipt_url\` text NULL, \`issued_by_user_id\` int NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_57b8e24107a6b4974d5dc20a78\` (\`receipt_no\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`subjects\` (\`id\` varchar(36) NOT NULL, \`course_id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`code\` varchar(255) NOT NULL, \`description\` text NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`student_guardians\` (\`id\` varchar(36) NOT NULL, \`student_id\` varchar(36) NOT NULL, \`guardian_name\` varchar(255) NOT NULL, \`relation\` varchar(255) NULL, \`phone\` varchar(255) NULL, \`email\` varchar(255) NULL, \`occupation\` varchar(255) NULL, \`address\` text NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`permissions\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`institutes\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`enrollments\` (\`id\` varchar(36) NOT NULL, \`student_id\` varchar(36) NOT NULL, \`course_id\` varchar(36) NOT NULL, \`batch_id\` varchar(36) NOT NULL, \`session_id\` varchar(36) NOT NULL, \`enrollment_date\` date NOT NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`file_uploads\` (\`id\` int NOT NULL AUTO_INCREMENT, \`module_name\` varchar(255) NOT NULL, \`record_id\` int NULL, \`file_name\` varchar(255) NOT NULL, \`file_url\` text NOT NULL, \`mime_type\` varchar(255) NULL, \`file_size\` bigint NULL, \`uploaded_by_user_id\` int NULL, \`branch_id\` int NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`institute_settings\` (\`id\` varchar(36) NOT NULL, \`key\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`courses\` (\`id\` varchar(36) NOT NULL, \`institute_id\` varchar(36) NOT NULL, \`branch_id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`code\` varchar(255) NOT NULL, \`description\` text NULL, \`duration\` varchar(255) NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`branches\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`batches\` (\`id\` varchar(36) NOT NULL, \`institute_id\` varchar(36) NOT NULL, \`branch_id\` varchar(36) NOT NULL, \`course_id\` varchar(36) NOT NULL, \`session_id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`code\` varchar(255) NOT NULL, \`batch_mode\` varchar(255) NULL, \`start_date\` date NULL, \`end_date\` date NULL, \`capacity\` int NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`batch_students\` (\`id\` varchar(36) NOT NULL, \`batch_id\` varchar(36) NOT NULL, \`student_id\` varchar(36) NOT NULL, \`joined_on\` date NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`batch_teachers\` (\`id\` varchar(36) NOT NULL, \`batch_id\` varchar(36) NOT NULL, \`teacher_id\` varchar(36) NOT NULL, \`subject_id\` varchar(36) NOT NULL, \`assigned_on\` date NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`admission_leads\` (\`id\` varchar(36) NOT NULL, \`institute_id\` varchar(36) NOT NULL, \`branch_id\` varchar(36) NOT NULL, \`student_name\` varchar(255) NOT NULL, \`parent_name\` varchar(255) NULL, \`phone\` varchar(255) NULL, \`email\` varchar(255) NULL, \`course_interest\` varchar(255) NULL, \`lead_status\` varchar(255) NOT NULL DEFAULT 'PENDING', \`remarks\` text NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`audit_logs\` (\`id\` varchar(36) NOT NULL, \`action\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`admissions\` (\`id\` varchar(36) NOT NULL, \`lead_id\` varchar(36) NULL, \`student_id\` varchar(36) NULL, \`admission_no\` varchar(255) NOT NULL, \`admission_date\` date NOT NULL, \`branch_id\` varchar(36) NOT NULL, \`session_id\` varchar(36) NOT NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_1e8e97dc5fd8fa52299da982ec\` (\`admission_no\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`activity_logs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`user_id\` int NULL, \`action\` varchar(255) NOT NULL, \`module\` varchar(255) NOT NULL, \`details\` text NULL, \`ip_address\` varchar(255) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`academic_sessions\` (\`id\` varchar(36) NOT NULL, \`session_name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`student_fee_plans\` ADD CONSTRAINT \`FK_effbe418dc0b6196aac5fa447f8\` FOREIGN KEY (\`fee_structure_id\`) REFERENCES \`fee_structures\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`invoices\` ADD CONSTRAINT \`FK_f627cb29961a45d9cff52954f7a\` FOREIGN KEY (\`student_fee_plan_id\`) REFERENCES \`student_fee_plans\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`payments\` ADD CONSTRAINT \`FK_563a5e248518c623eebd987d43e\` FOREIGN KEY (\`invoice_id\`) REFERENCES \`invoices\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`receipts\` ADD CONSTRAINT \`FK_d2cfb7a62d629121d47a89ab989\` FOREIGN KEY (\`payment_id\`) REFERENCES \`payments\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`receipts\` DROP FOREIGN KEY \`FK_d2cfb7a62d629121d47a89ab989\``);
        await queryRunner.query(`ALTER TABLE \`payments\` DROP FOREIGN KEY \`FK_563a5e248518c623eebd987d43e\``);
        await queryRunner.query(`ALTER TABLE \`invoices\` DROP FOREIGN KEY \`FK_f627cb29961a45d9cff52954f7a\``);
        await queryRunner.query(`ALTER TABLE \`student_fee_plans\` DROP FOREIGN KEY \`FK_effbe418dc0b6196aac5fa447f8\``);
        await queryRunner.query(`DROP TABLE \`academic_sessions\``);
        await queryRunner.query(`DROP TABLE \`activity_logs\``);
        await queryRunner.query(`DROP INDEX \`IDX_1e8e97dc5fd8fa52299da982ec\` ON \`admissions\``);
        await queryRunner.query(`DROP TABLE \`admissions\``);
        await queryRunner.query(`DROP TABLE \`audit_logs\``);
        await queryRunner.query(`DROP TABLE \`admission_leads\``);
        await queryRunner.query(`DROP TABLE \`batch_teachers\``);
        await queryRunner.query(`DROP TABLE \`batch_students\``);
        await queryRunner.query(`DROP TABLE \`batches\``);
        await queryRunner.query(`DROP TABLE \`branches\``);
        await queryRunner.query(`DROP TABLE \`courses\``);
        await queryRunner.query(`DROP TABLE \`institute_settings\``);
        await queryRunner.query(`DROP TABLE \`file_uploads\``);
        await queryRunner.query(`DROP TABLE \`enrollments\``);
        await queryRunner.query(`DROP TABLE \`institutes\``);
        await queryRunner.query(`DROP TABLE \`permissions\``);
        await queryRunner.query(`DROP TABLE \`student_guardians\``);
        await queryRunner.query(`DROP TABLE \`subjects\``);
        await queryRunner.query(`DROP INDEX \`IDX_57b8e24107a6b4974d5dc20a78\` ON \`receipts\``);
        await queryRunner.query(`DROP TABLE \`receipts\``);
        await queryRunner.query(`DROP TABLE \`payments\``);
        await queryRunner.query(`DROP INDEX \`IDX_37669c562a2525929927d9d691\` ON \`invoices\``);
        await queryRunner.query(`DROP TABLE \`invoices\``);
        await queryRunner.query(`DROP TABLE \`role_permissions\``);
        await queryRunner.query(`DROP TABLE \`report_exports\``);
        await queryRunner.query(`DROP TABLE \`roles\``);
        await queryRunner.query(`DROP TABLE \`student_fee_plans\``);
        await queryRunner.query(`DROP TABLE \`fee_structures\``);
        await queryRunner.query(`DROP TABLE \`students\``);
        await queryRunner.query(`DROP TABLE \`student_documents\``);
        await queryRunner.query(`DROP TABLE \`user_roles\``);
        await queryRunner.query(`DROP INDEX \`IDX_1882c07aedb478aca672340c82\` ON \`teachers\``);
        await queryRunner.query(`DROP TABLE \`teachers\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
