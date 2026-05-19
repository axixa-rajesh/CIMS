import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1779092065660 implements MigrationInterface {
    name = 'Init1779092065660'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`fee_structures\` (\`id\` int NOT NULL AUTO_INCREMENT, \`course_id\` int NOT NULL, \`institute_id\` int NULL, \`branch_id\` int NULL, \`name\` varchar(255) NOT NULL, \`total_amount\` decimal(10,2) NOT NULL, \`installment_count\` int NOT NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`student_fee_plans\` (\`id\` int NOT NULL AUTO_INCREMENT, \`student_id\` int NOT NULL, \`batch_id\` int NULL, \`session_id\` int NULL, \`fee_structure_id\` int NOT NULL, \`discount_amount\` decimal(10,2) NOT NULL DEFAULT '0.00', \`final_amount\` decimal(10,2) NOT NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_roles\` (\`id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`roles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role_permissions\` (\`id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`invoices\` (\`id\` int NOT NULL AUTO_INCREMENT, \`student_id\` int NOT NULL, \`batch_id\` int NULL, \`session_id\` int NULL, \`branch_id\` int NULL, \`course_id\` int NULL, \`student_fee_plan_id\` int NULL, \`invoice_no\` varchar(255) NOT NULL, \`invoice_date\` date NOT NULL, \`total_amount\` decimal(10,2) NOT NULL, \`discount_amount\` decimal(10,2) NOT NULL DEFAULT '0.00', \`net_amount\` decimal(10,2) NOT NULL, \`due_date\` date NULL, \`payment_status\` varchar(255) NOT NULL DEFAULT 'UNPAID', \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_37669c562a2525929927d9d691\` (\`invoice_no\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`payments\` (\`id\` int NOT NULL AUTO_INCREMENT, \`student_id\` int NOT NULL, \`invoice_id\` int NOT NULL, \`payment_date\` date NOT NULL, \`paid_amount\` decimal(10,2) NOT NULL, \`payment_mode\` varchar(255) NOT NULL, \`transaction_ref_no\` varchar(255) NULL, \`received_by_user_id\` int NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`receipts\` (\`id\` int NOT NULL AUTO_INCREMENT, \`payment_id\` int NOT NULL, \`receipt_no\` varchar(255) NOT NULL, \`receipt_date\` date NOT NULL, \`receipt_url\` text NULL, \`issued_by_user_id\` int NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_57b8e24107a6b4974d5dc20a78\` (\`receipt_no\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`permissions\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`report_exports\` (\`id\` int NOT NULL AUTO_INCREMENT, \`user_id\` int NOT NULL, \`branch_id\` int NULL, \`session_id\` int NULL, \`report_name\` varchar(255) NOT NULL, \`filter_json\` text NULL, \`file_url\` text NOT NULL, \`exported_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`institutes\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`institute_settings\` (\`id\` int NOT NULL AUTO_INCREMENT, \`key\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`file_uploads\` (\`id\` int NOT NULL AUTO_INCREMENT, \`module_name\` varchar(255) NOT NULL, \`record_id\` int NULL, \`file_name\` varchar(255) NOT NULL, \`file_url\` text NOT NULL, \`mime_type\` varchar(255) NULL, \`file_size\` bigint NULL, \`uploaded_by_user_id\` int NULL, \`branch_id\` int NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`branches\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`audit_logs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`action\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`activity_logs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`user_id\` int NULL, \`action\` varchar(255) NOT NULL, \`module\` varchar(255) NOT NULL, \`details\` text NULL, \`ip_address\` varchar(255) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`academic_sessions\` (\`id\` int NOT NULL AUTO_INCREMENT, \`session_name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
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
        await queryRunner.query(`DROP TABLE \`audit_logs\``);
        await queryRunner.query(`DROP TABLE \`branches\``);
        await queryRunner.query(`DROP TABLE \`file_uploads\``);
        await queryRunner.query(`DROP TABLE \`institute_settings\``);
        await queryRunner.query(`DROP TABLE \`institutes\``);
        await queryRunner.query(`DROP TABLE \`report_exports\``);
        await queryRunner.query(`DROP TABLE \`permissions\``);
        await queryRunner.query(`DROP INDEX \`IDX_57b8e24107a6b4974d5dc20a78\` ON \`receipts\``);
        await queryRunner.query(`DROP TABLE \`receipts\``);
        await queryRunner.query(`DROP TABLE \`payments\``);
        await queryRunner.query(`DROP INDEX \`IDX_37669c562a2525929927d9d691\` ON \`invoices\``);
        await queryRunner.query(`DROP TABLE \`invoices\``);
        await queryRunner.query(`DROP TABLE \`role_permissions\``);
        await queryRunner.query(`DROP TABLE \`roles\``);
        await queryRunner.query(`DROP TABLE \`user_roles\``);
        await queryRunner.query(`DROP TABLE \`student_fee_plans\``);
        await queryRunner.query(`DROP TABLE \`fee_structures\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
