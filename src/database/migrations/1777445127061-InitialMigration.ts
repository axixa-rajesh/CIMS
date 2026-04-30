import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1777445127061 implements MigrationInterface {
    name = 'InitialMigration1777445127061'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`teachers\` (\`id\` varchar(36) NOT NULL, \`institute_id\` varchar(36) NULL, \`branch_id\` varchar(36) NULL, \`user_id\` varchar(36) NULL, \`employee_code\` varchar(255) NOT NULL, \`first_name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`phone\` varchar(255) NULL, \`email\` varchar(255) NULL, \`qualification\` text NULL, \`joining_date\` date NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_1882c07aedb478aca672340c82\` (\`employee_code\`), UNIQUE INDEX \`IDX_7568c49a630907119e4a665c60\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`students\` (\`id\` varchar(36) NOT NULL, \`institute_id\` varchar(36) NOT NULL, \`branch_id\` varchar(36) NOT NULL, \`user_id\` varchar(36) NOT NULL, \`admission_no\` varchar(255) NOT NULL, \`roll_no\` varchar(255) NULL, \`first_name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`gender\` varchar(255) NULL, \`dob\` date NULL, \`email\` varchar(255) NULL, \`phone\` varchar(255) NULL, \`address\` text NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_60be61f5398fa190f5808f0bc0\` (\`admission_no\`), UNIQUE INDEX \`IDX_25985d58c714a4a427ced57507\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`student_guardians\` (\`id\` varchar(36) NOT NULL, \`student_id\` varchar(36) NOT NULL, \`guardian_name\` varchar(255) NOT NULL, \`relation\` varchar(255) NULL, \`phone\` varchar(255) NULL, \`email\` varchar(255) NULL, \`occupation\` varchar(255) NULL, \`address\` text NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`student_documents\` (\`id\` varchar(36) NOT NULL, \`student_id\` varchar(36) NOT NULL, \`document_type\` varchar(255) NOT NULL, \`document_name\` varchar(255) NOT NULL, \`file_url\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`admission_leads\` (\`id\` varchar(36) NOT NULL, \`institute_id\` varchar(36) NOT NULL, \`branch_id\` varchar(36) NOT NULL, \`student_name\` varchar(255) NOT NULL, \`parent_name\` varchar(255) NULL, \`phone\` varchar(255) NOT NULL, \`email\` varchar(255) NULL, \`course_interest\` varchar(255) NULL, \`lead_status\` varchar(255) NOT NULL DEFAULT 'PENDING', \`remarks\` text NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`admissions\` (\`id\` varchar(36) NOT NULL, \`lead_id\` varchar(36) NULL, \`student_id\` varchar(36) NOT NULL, \`admission_no\` varchar(255) NOT NULL, \`admission_date\` date NOT NULL, \`branch_id\` varchar(36) NOT NULL, \`session_id\` varchar(36) NOT NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_1e8e97dc5fd8fa52299da982ec\` (\`admission_no\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`courses\` (\`id\` varchar(36) NOT NULL, \`institute_id\` varchar(36) NOT NULL, \`branch_id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`code\` varchar(255) NOT NULL, \`description\` text NULL, \`duration\` varchar(255) NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_86b3589486bac01d2903e22471\` (\`code\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`subjects\` (\`id\` varchar(36) NOT NULL, \`course_id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`code\` varchar(255) NOT NULL, \`description\` text NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`batches\` (\`id\` varchar(36) NOT NULL, \`institute_id\` varchar(36) NOT NULL, \`branch_id\` varchar(36) NOT NULL, \`course_id\` varchar(36) NOT NULL, \`session_id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`code\` varchar(255) NOT NULL, \`batch_mode\` varchar(255) NULL, \`start_date\` date NULL, \`end_date\` date NULL, \`capacity\` int NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_4c9f441d3c72ff374f73dfbd84\` (\`code\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`enrollments\` (\`id\` varchar(36) NOT NULL, \`student_id\` varchar(36) NOT NULL, \`course_id\` varchar(36) NOT NULL, \`batch_id\` varchar(36) NULL, \`session_id\` varchar(36) NOT NULL, \`enrollment_date\` date NOT NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`batch_teachers\` (\`id\` varchar(36) NOT NULL, \`batch_id\` varchar(36) NOT NULL, \`teacher_id\` varchar(36) NOT NULL, \`subject_id\` varchar(36) NOT NULL, \`assigned_on\` date NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`batch_students\` (\`id\` varchar(36) NOT NULL, \`batch_id\` varchar(36) NOT NULL, \`student_id\` varchar(36) NOT NULL, \`joined_on\` date NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`student_guardians\` ADD CONSTRAINT \`FK_8194052bdd62204f061dd44e0c9\` FOREIGN KEY (\`student_id\`) REFERENCES \`students\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`student_documents\` ADD CONSTRAINT \`FK_8b0e086cbeca4ba69aadaac8541\` FOREIGN KEY (\`student_id\`) REFERENCES \`students\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`admissions\` ADD CONSTRAINT \`FK_a6b4c8350fe376acb04b178f202\` FOREIGN KEY (\`lead_id\`) REFERENCES \`admission_leads\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`subjects\` ADD CONSTRAINT \`FK_835122f9fd835b03ef36d817d60\` FOREIGN KEY (\`course_id\`) REFERENCES \`courses\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`batches\` ADD CONSTRAINT \`FK_c333b8c19525fc0a855ff8c3082\` FOREIGN KEY (\`course_id\`) REFERENCES \`courses\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`enrollments\` ADD CONSTRAINT \`FK_307813fe255896d6ebf3e6cd55c\` FOREIGN KEY (\`student_id\`) REFERENCES \`students\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`enrollments\` ADD CONSTRAINT \`FK_b79d0bf01779fdf9cfb6b092af3\` FOREIGN KEY (\`course_id\`) REFERENCES \`courses\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`enrollments\` ADD CONSTRAINT \`FK_314e747891d5555efc344bd2887\` FOREIGN KEY (\`batch_id\`) REFERENCES \`batches\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`batch_teachers\` ADD CONSTRAINT \`FK_8b847abe999e5e85476fae8f05b\` FOREIGN KEY (\`batch_id\`) REFERENCES \`batches\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`batch_teachers\` ADD CONSTRAINT \`FK_9ebbe67dc162b7cd815d3c091b7\` FOREIGN KEY (\`teacher_id\`) REFERENCES \`teachers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`batch_teachers\` ADD CONSTRAINT \`FK_6771eaca94f3b321050b4bff834\` FOREIGN KEY (\`subject_id\`) REFERENCES \`subjects\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`batch_students\` ADD CONSTRAINT \`FK_b9a386d62a48a5cc26fccca6f8f\` FOREIGN KEY (\`batch_id\`) REFERENCES \`batches\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`batch_students\` ADD CONSTRAINT \`FK_c772c73b33f91c7abf458bf35cf\` FOREIGN KEY (\`student_id\`) REFERENCES \`students\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`batch_students\` DROP FOREIGN KEY \`FK_c772c73b33f91c7abf458bf35cf\``);
        await queryRunner.query(`ALTER TABLE \`batch_students\` DROP FOREIGN KEY \`FK_b9a386d62a48a5cc26fccca6f8f\``);
        await queryRunner.query(`ALTER TABLE \`batch_teachers\` DROP FOREIGN KEY \`FK_6771eaca94f3b321050b4bff834\``);
        await queryRunner.query(`ALTER TABLE \`batch_teachers\` DROP FOREIGN KEY \`FK_9ebbe67dc162b7cd815d3c091b7\``);
        await queryRunner.query(`ALTER TABLE \`batch_teachers\` DROP FOREIGN KEY \`FK_8b847abe999e5e85476fae8f05b\``);
        await queryRunner.query(`ALTER TABLE \`enrollments\` DROP FOREIGN KEY \`FK_314e747891d5555efc344bd2887\``);
        await queryRunner.query(`ALTER TABLE \`enrollments\` DROP FOREIGN KEY \`FK_b79d0bf01779fdf9cfb6b092af3\``);
        await queryRunner.query(`ALTER TABLE \`enrollments\` DROP FOREIGN KEY \`FK_307813fe255896d6ebf3e6cd55c\``);
        await queryRunner.query(`ALTER TABLE \`batches\` DROP FOREIGN KEY \`FK_c333b8c19525fc0a855ff8c3082\``);
        await queryRunner.query(`ALTER TABLE \`subjects\` DROP FOREIGN KEY \`FK_835122f9fd835b03ef36d817d60\``);
        await queryRunner.query(`ALTER TABLE \`admissions\` DROP FOREIGN KEY \`FK_a6b4c8350fe376acb04b178f202\``);
        await queryRunner.query(`ALTER TABLE \`student_documents\` DROP FOREIGN KEY \`FK_8b0e086cbeca4ba69aadaac8541\``);
        await queryRunner.query(`ALTER TABLE \`student_guardians\` DROP FOREIGN KEY \`FK_8194052bdd62204f061dd44e0c9\``);
        await queryRunner.query(`DROP TABLE \`batch_students\``);
        await queryRunner.query(`DROP TABLE \`batch_teachers\``);
        await queryRunner.query(`DROP TABLE \`enrollments\``);
        await queryRunner.query(`DROP INDEX \`IDX_4c9f441d3c72ff374f73dfbd84\` ON \`batches\``);
        await queryRunner.query(`DROP TABLE \`batches\``);
        await queryRunner.query(`DROP TABLE \`subjects\``);
        await queryRunner.query(`DROP INDEX \`IDX_86b3589486bac01d2903e22471\` ON \`courses\``);
        await queryRunner.query(`DROP TABLE \`courses\``);
        await queryRunner.query(`DROP INDEX \`IDX_1e8e97dc5fd8fa52299da982ec\` ON \`admissions\``);
        await queryRunner.query(`DROP TABLE \`admissions\``);
        await queryRunner.query(`DROP TABLE \`admission_leads\``);
        await queryRunner.query(`DROP TABLE \`student_documents\``);
        await queryRunner.query(`DROP TABLE \`student_guardians\``);
        await queryRunner.query(`DROP INDEX \`IDX_25985d58c714a4a427ced57507\` ON \`students\``);
        await queryRunner.query(`DROP INDEX \`IDX_60be61f5398fa190f5808f0bc0\` ON \`students\``);
        await queryRunner.query(`DROP TABLE \`students\``);
        await queryRunner.query(`DROP INDEX \`IDX_7568c49a630907119e4a665c60\` ON \`teachers\``);
        await queryRunner.query(`DROP INDEX \`IDX_1882c07aedb478aca672340c82\` ON \`teachers\``);
        await queryRunner.query(`DROP TABLE \`teachers\``);
    }

}
