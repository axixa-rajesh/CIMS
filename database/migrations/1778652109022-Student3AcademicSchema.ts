import { MigrationInterface, QueryRunner } from "typeorm";

export class Student3AcademicSchema1778652109022 implements MigrationInterface {
    name = 'Student3AcademicSchema1778652109022'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`teachers\` (\`id\` varchar(36) NOT NULL, \`institute_id\` varchar(36) NOT NULL, \`branch_id\` varchar(36) NOT NULL, \`user_id\` varchar(36) NULL, \`employee_code\` varchar(255) NOT NULL, \`first_name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`phone\` varchar(255) NULL, \`email\` varchar(255) NULL, \`qualification\` text NULL, \`joining_date\` date NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_1882c07aedb478aca672340c82\` (\`employee_code\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`subjects\` (\`id\` varchar(36) NOT NULL, \`course_id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`code\` varchar(255) NOT NULL, \`description\` text NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`student_guardians\` (\`id\` varchar(36) NOT NULL, \`student_id\` varchar(36) NOT NULL, \`guardian_name\` varchar(255) NOT NULL, \`relation\` varchar(255) NULL, \`phone\` varchar(255) NULL, \`email\` varchar(255) NULL, \`occupation\` varchar(255) NULL, \`address\` text NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`student_documents\` (\`id\` varchar(36) NOT NULL, \`student_id\` varchar(36) NOT NULL, \`document_type\` varchar(255) NOT NULL, \`document_name\` varchar(255) NOT NULL, \`file_url\` text NOT NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`students\` (\`id\` varchar(36) NOT NULL, \`institute_id\` varchar(36) NOT NULL, \`branch_id\` varchar(36) NOT NULL, \`user_id\` varchar(36) NULL, \`admission_no\` varchar(255) NULL, \`roll_no\` varchar(255) NULL, \`first_name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`gender\` varchar(255) NULL, \`dob\` date NULL, \`email\` varchar(255) NULL, \`phone\` varchar(255) NULL, \`address\` text NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`enrollments\` (\`id\` varchar(36) NOT NULL, \`student_id\` varchar(36) NOT NULL, \`course_id\` varchar(36) NOT NULL, \`batch_id\` varchar(36) NOT NULL, \`session_id\` varchar(36) NOT NULL, \`enrollment_date\` date NOT NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`courses\` (\`id\` varchar(36) NOT NULL, \`institute_id\` varchar(36) NOT NULL, \`branch_id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`code\` varchar(255) NOT NULL, \`description\` text NULL, \`duration\` varchar(255) NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`batches\` (\`id\` varchar(36) NOT NULL, \`institute_id\` varchar(36) NOT NULL, \`branch_id\` varchar(36) NOT NULL, \`course_id\` varchar(36) NOT NULL, \`session_id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`code\` varchar(255) NOT NULL, \`batch_mode\` varchar(255) NULL, \`start_date\` date NULL, \`end_date\` date NULL, \`capacity\` int NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`batch_teachers\` (\`id\` varchar(36) NOT NULL, \`batch_id\` varchar(36) NOT NULL, \`teacher_id\` varchar(36) NOT NULL, \`subject_id\` varchar(36) NOT NULL, \`assigned_on\` date NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`batch_students\` (\`id\` varchar(36) NOT NULL, \`batch_id\` varchar(36) NOT NULL, \`student_id\` varchar(36) NOT NULL, \`joined_on\` date NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`admission_leads\` (\`id\` varchar(36) NOT NULL, \`institute_id\` varchar(36) NOT NULL, \`branch_id\` varchar(36) NOT NULL, \`student_name\` varchar(255) NOT NULL, \`parent_name\` varchar(255) NULL, \`phone\` varchar(255) NULL, \`email\` varchar(255) NULL, \`course_interest\` varchar(255) NULL, \`lead_status\` varchar(255) NOT NULL DEFAULT 'PENDING', \`remarks\` text NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`activity_logs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`user_id\` int NULL, \`action\` varchar(255) NOT NULL, \`module\` varchar(255) NOT NULL, \`details\` text NULL, \`ip_address\` varchar(255) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`admissions\` (\`id\` varchar(36) NOT NULL, \`lead_id\` varchar(36) NULL, \`student_id\` varchar(36) NULL, \`admission_no\` varchar(255) NOT NULL, \`admission_date\` date NOT NULL, \`branch_id\` varchar(36) NOT NULL, \`session_id\` varchar(36) NOT NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_1e8e97dc5fd8fa52299da982ec\` (\`admission_no\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`fee_structures\` CHANGE \`institute_id\` \`institute_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`fee_structures\` CHANGE \`branch_id\` \`branch_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`student_fee_plans\` CHANGE \`batch_id\` \`batch_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`student_fee_plans\` CHANGE \`session_id\` \`session_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`report_exports\` CHANGE \`branch_id\` \`branch_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`report_exports\` CHANGE \`session_id\` \`session_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`report_exports\` CHANGE \`filter_json\` \`filter_json\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`invoices\` DROP FOREIGN KEY \`FK_f627cb29961a45d9cff52954f7a\``);
        await queryRunner.query(`ALTER TABLE \`invoices\` CHANGE \`batch_id\` \`batch_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`invoices\` CHANGE \`session_id\` \`session_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`invoices\` CHANGE \`branch_id\` \`branch_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`invoices\` CHANGE \`course_id\` \`course_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`invoices\` CHANGE \`student_fee_plan_id\` \`student_fee_plan_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`invoices\` CHANGE \`due_date\` \`due_date\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`payments\` CHANGE \`transaction_ref_no\` \`transaction_ref_no\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`payments\` CHANGE \`received_by_user_id\` \`received_by_user_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`receipts\` CHANGE \`receipt_url\` \`receipt_url\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`receipts\` CHANGE \`issued_by_user_id\` \`issued_by_user_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`file_uploads\` CHANGE \`record_id\` \`record_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`file_uploads\` CHANGE \`mime_type\` \`mime_type\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`file_uploads\` CHANGE \`file_size\` \`file_size\` bigint NULL`);
        await queryRunner.query(`ALTER TABLE \`file_uploads\` CHANGE \`uploaded_by_user_id\` \`uploaded_by_user_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`file_uploads\` CHANGE \`branch_id\` \`branch_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`invoices\` ADD CONSTRAINT \`FK_f627cb29961a45d9cff52954f7a\` FOREIGN KEY (\`student_fee_plan_id\`) REFERENCES \`student_fee_plans\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`invoices\` DROP FOREIGN KEY \`FK_f627cb29961a45d9cff52954f7a\``);
        await queryRunner.query(`ALTER TABLE \`file_uploads\` CHANGE \`branch_id\` \`branch_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`file_uploads\` CHANGE \`uploaded_by_user_id\` \`uploaded_by_user_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`file_uploads\` CHANGE \`file_size\` \`file_size\` bigint NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`file_uploads\` CHANGE \`mime_type\` \`mime_type\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`file_uploads\` CHANGE \`record_id\` \`record_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`receipts\` CHANGE \`issued_by_user_id\` \`issued_by_user_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`receipts\` CHANGE \`receipt_url\` \`receipt_url\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`payments\` CHANGE \`received_by_user_id\` \`received_by_user_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`payments\` CHANGE \`transaction_ref_no\` \`transaction_ref_no\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`invoices\` CHANGE \`due_date\` \`due_date\` date NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`invoices\` CHANGE \`student_fee_plan_id\` \`student_fee_plan_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`invoices\` CHANGE \`course_id\` \`course_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`invoices\` CHANGE \`branch_id\` \`branch_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`invoices\` CHANGE \`session_id\` \`session_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`invoices\` CHANGE \`batch_id\` \`batch_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`invoices\` ADD CONSTRAINT \`FK_f627cb29961a45d9cff52954f7a\` FOREIGN KEY (\`student_fee_plan_id\`) REFERENCES \`student_fee_plans\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`report_exports\` CHANGE \`filter_json\` \`filter_json\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`report_exports\` CHANGE \`session_id\` \`session_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`report_exports\` CHANGE \`branch_id\` \`branch_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`student_fee_plans\` CHANGE \`session_id\` \`session_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`student_fee_plans\` CHANGE \`batch_id\` \`batch_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`fee_structures\` CHANGE \`branch_id\` \`branch_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`fee_structures\` CHANGE \`institute_id\` \`institute_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`DROP INDEX \`IDX_1e8e97dc5fd8fa52299da982ec\` ON \`admissions\``);
        await queryRunner.query(`DROP TABLE \`admissions\``);
        await queryRunner.query(`DROP TABLE \`activity_logs\``);
        await queryRunner.query(`DROP TABLE \`admission_leads\``);
        await queryRunner.query(`DROP TABLE \`batch_students\``);
        await queryRunner.query(`DROP TABLE \`batch_teachers\``);
        await queryRunner.query(`DROP TABLE \`batches\``);
        await queryRunner.query(`DROP TABLE \`courses\``);
        await queryRunner.query(`DROP TABLE \`enrollments\``);
        await queryRunner.query(`DROP TABLE \`students\``);
        await queryRunner.query(`DROP TABLE \`student_documents\``);
        await queryRunner.query(`DROP TABLE \`student_guardians\``);
        await queryRunner.query(`DROP TABLE \`subjects\``);
        await queryRunner.query(`DROP INDEX \`IDX_1882c07aedb478aca672340c82\` ON \`teachers\``);
        await queryRunner.query(`DROP TABLE \`teachers\``);
    }

}
