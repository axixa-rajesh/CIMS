import { MigrationInterface, QueryRunner } from "typeorm";

export class Relations1777881921920 implements MigrationInterface {
    name = 'Relations1777881921920'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`admission_leads\` (\`id\` varchar(36) NOT NULL, \`institute_id\` varchar(36) NOT NULL, \`branch_id\` varchar(36) NOT NULL, \`student_name\` varchar(255) NOT NULL, \`parent_name\` varchar(255) NULL, \`phone\` varchar(255) NOT NULL, \`email\` varchar(255) NULL, \`course_interest\` varchar(255) NULL, \`lead_status\` varchar(255) NOT NULL DEFAULT 'PENDING', \`remarks\` text NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`admissions\` (\`id\` varchar(36) NOT NULL, \`lead_id\` varchar(36) NULL, \`student_id\` varchar(36) NOT NULL, \`admission_no\` varchar(255) NOT NULL, \`admission_date\` date NOT NULL, \`branch_id\` varchar(36) NOT NULL, \`session_id\` varchar(36) NOT NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_1e8e97dc5fd8fa52299da982ec\` (\`admission_no\`), UNIQUE INDEX \`REL_7d958e4a9d315b162159854b87\` (\`student_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`academic_sessions\` (\`id\` varchar(36) NOT NULL, \`institute_id\` varchar(36) NOT NULL, \`branch_id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`start_date\` date NULL, \`end_date\` date NULL, \`is_current\` tinyint NOT NULL DEFAULT 0, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`student_guardians\` (\`id\` varchar(36) NOT NULL, \`student_id\` varchar(36) NOT NULL, \`guardian_name\` varchar(255) NOT NULL, \`relation\` varchar(255) NULL, \`phone\` varchar(255) NULL, \`email\` varchar(255) NULL, \`occupation\` varchar(255) NULL, \`address\` text NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`student_documents\` (\`id\` varchar(36) NOT NULL, \`student_id\` varchar(36) NOT NULL, \`document_type\` varchar(255) NOT NULL, \`document_name\` varchar(255) NOT NULL, \`file_url\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`batch_students\` (\`id\` varchar(36) NOT NULL, \`batch_id\` varchar(36) NOT NULL, \`student_id\` varchar(36) NOT NULL, \`joined_on\` date NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`batches\` (\`id\` varchar(36) NOT NULL, \`institute_id\` varchar(36) NOT NULL, \`branch_id\` varchar(36) NOT NULL, \`course_id\` varchar(36) NOT NULL, \`session_id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`code\` varchar(255) NOT NULL, \`batch_mode\` varchar(255) NULL, \`start_date\` date NULL, \`end_date\` date NULL, \`capacity\` int NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_4c9f441d3c72ff374f73dfbd84\` (\`code\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`batch_teachers\` (\`id\` varchar(36) NOT NULL, \`batch_id\` varchar(36) NOT NULL, \`teacher_id\` varchar(36) NOT NULL, \`subject_id\` varchar(36) NOT NULL, \`assigned_on\` date NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_e8b65c30a036f6785c753ab92d\` (\`batch_id\`, \`teacher_id\`, \`subject_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`subjects\` (\`id\` varchar(36) NOT NULL, \`course_id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`code\` varchar(255) NOT NULL, \`description\` text NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`courses\` (\`id\` varchar(36) NOT NULL, \`institute_id\` varchar(36) NOT NULL, \`branch_id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`code\` varchar(255) NOT NULL, \`description\` text NULL, \`duration\` varchar(255) NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_86b3589486bac01d2903e22471\` (\`code\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`enrollments\` (\`id\` varchar(36) NOT NULL, \`student_id\` varchar(36) NOT NULL, \`course_id\` varchar(36) NOT NULL, \`batch_id\` varchar(36) NULL, \`session_id\` varchar(36) NOT NULL, \`enrollment_date\` date NOT NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`students\` (\`id\` varchar(36) NOT NULL, \`institute_id\` varchar(36) NOT NULL, \`branch_id\` varchar(36) NOT NULL, \`session_id\` varchar(36) NOT NULL, \`user_id\` varchar(36) NULL, \`admission_no\` varchar(255) NOT NULL, \`roll_no\` varchar(255) NULL, \`first_name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NULL, \`gender\` varchar(255) NULL, \`dob\` date NULL, \`email\` varchar(255) NULL, \`phone\` varchar(255) NULL, \`address\` text NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_60be61f5398fa190f5808f0bc0\` (\`admission_no\`), UNIQUE INDEX \`IDX_25985d58c714a4a427ced57507\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`branches\` (\`id\` varchar(36) NOT NULL, \`institute_id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`code\` varchar(255) NULL, \`phone\` varchar(255) NULL, \`email\` varchar(255) NULL, \`address\` text NULL, \`city\` varchar(255) NULL, \`state\` varchar(255) NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_9c06cbb83feb2f0be6263bd47e\` (\`code\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`institutes\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`code\` varchar(255) NULL, \`email\` varchar(255) NULL, \`phone\` varchar(255) NULL, \`website\` varchar(255) NULL, \`logo_url\` varchar(255) NULL, \`address\` text NULL, \`city\` varchar(255) NULL, \`state\` varchar(255) NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_f370a4e41c80ddd11af1fea8a3\` (\`code\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`teachers\` (\`id\` varchar(36) NOT NULL, \`institute_id\` varchar(36) NOT NULL, \`branch_id\` varchar(36) NOT NULL, \`user_id\` varchar(36) NULL, \`employee_code\` varchar(255) NOT NULL, \`first_name\` varchar(255) NOT NULL, \`last_name\` varchar(255) NOT NULL, \`phone\` varchar(255) NULL, \`email\` varchar(255) NULL, \`qualification\` text NULL, \`joining_date\` date NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_1882c07aedb478aca672340c82\` (\`employee_code\`), UNIQUE INDEX \`IDX_7568c49a630907119e4a665c60\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`admissions\` ADD CONSTRAINT \`FK_a6b4c8350fe376acb04b178f202\` FOREIGN KEY (\`lead_id\`) REFERENCES \`admission_leads\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`admissions\` ADD CONSTRAINT \`FK_7d958e4a9d315b162159854b87e\` FOREIGN KEY (\`student_id\`) REFERENCES \`students\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`admissions\` ADD CONSTRAINT \`FK_bd062437bb1f71af9e99a5fda36\` FOREIGN KEY (\`branch_id\`) REFERENCES \`branches\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`admissions\` ADD CONSTRAINT \`FK_de9f9d83281d67a8c49a87274ff\` FOREIGN KEY (\`session_id\`) REFERENCES \`academic_sessions\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`academic_sessions\` ADD CONSTRAINT \`FK_715d7c57ad00ec445785d8349d2\` FOREIGN KEY (\`institute_id\`) REFERENCES \`institutes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`academic_sessions\` ADD CONSTRAINT \`FK_66a69f03b7bb0b2c75fcabb3fa1\` FOREIGN KEY (\`branch_id\`) REFERENCES \`branches\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`student_guardians\` ADD CONSTRAINT \`FK_8194052bdd62204f061dd44e0c9\` FOREIGN KEY (\`student_id\`) REFERENCES \`students\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`student_documents\` ADD CONSTRAINT \`FK_8b0e086cbeca4ba69aadaac8541\` FOREIGN KEY (\`student_id\`) REFERENCES \`students\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`batch_students\` ADD CONSTRAINT \`FK_b9a386d62a48a5cc26fccca6f8f\` FOREIGN KEY (\`batch_id\`) REFERENCES \`batches\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`batch_students\` ADD CONSTRAINT \`FK_c772c73b33f91c7abf458bf35cf\` FOREIGN KEY (\`student_id\`) REFERENCES \`students\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`batches\` ADD CONSTRAINT \`FK_a0490337d2e5b8aed63a4701c3f\` FOREIGN KEY (\`institute_id\`) REFERENCES \`institutes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`batches\` ADD CONSTRAINT \`FK_dbc9dbab0eddd33834beeeb4d7d\` FOREIGN KEY (\`branch_id\`) REFERENCES \`branches\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`batches\` ADD CONSTRAINT \`FK_c333b8c19525fc0a855ff8c3082\` FOREIGN KEY (\`course_id\`) REFERENCES \`courses\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`batches\` ADD CONSTRAINT \`FK_271089b0c13ec85177e2fbb9606\` FOREIGN KEY (\`session_id\`) REFERENCES \`academic_sessions\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`batch_teachers\` ADD CONSTRAINT \`FK_8b847abe999e5e85476fae8f05b\` FOREIGN KEY (\`batch_id\`) REFERENCES \`batches\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`batch_teachers\` ADD CONSTRAINT \`FK_9ebbe67dc162b7cd815d3c091b7\` FOREIGN KEY (\`teacher_id\`) REFERENCES \`teachers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`batch_teachers\` ADD CONSTRAINT \`FK_6771eaca94f3b321050b4bff834\` FOREIGN KEY (\`subject_id\`) REFERENCES \`subjects\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`subjects\` ADD CONSTRAINT \`FK_835122f9fd835b03ef36d817d60\` FOREIGN KEY (\`course_id\`) REFERENCES \`courses\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`courses\` ADD CONSTRAINT \`FK_657b103aa6e8df4e214e384a1a7\` FOREIGN KEY (\`institute_id\`) REFERENCES \`institutes\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`courses\` ADD CONSTRAINT \`FK_0899a88ebb5f8c308b7e1707b36\` FOREIGN KEY (\`branch_id\`) REFERENCES \`branches\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`enrollments\` ADD CONSTRAINT \`FK_307813fe255896d6ebf3e6cd55c\` FOREIGN KEY (\`student_id\`) REFERENCES \`students\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`enrollments\` ADD CONSTRAINT \`FK_b79d0bf01779fdf9cfb6b092af3\` FOREIGN KEY (\`course_id\`) REFERENCES \`courses\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`enrollments\` ADD CONSTRAINT \`FK_314e747891d5555efc344bd2887\` FOREIGN KEY (\`batch_id\`) REFERENCES \`batches\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`enrollments\` ADD CONSTRAINT \`FK_26fc1c926ec2d9e07ed686d85dc\` FOREIGN KEY (\`session_id\`) REFERENCES \`academic_sessions\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`students\` ADD CONSTRAINT \`FK_293833a3218a32c7a2cda3693f3\` FOREIGN KEY (\`institute_id\`) REFERENCES \`institutes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`students\` ADD CONSTRAINT \`FK_e2b424d1d926ec268413c32de59\` FOREIGN KEY (\`branch_id\`) REFERENCES \`branches\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`students\` ADD CONSTRAINT \`FK_d8fd2547dac91c4202e61a84e42\` FOREIGN KEY (\`session_id\`) REFERENCES \`academic_sessions\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`branches\` ADD CONSTRAINT \`FK_e34a16813396bd43bb6a01464ce\` FOREIGN KEY (\`institute_id\`) REFERENCES \`institutes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`teachers\` ADD CONSTRAINT \`FK_96126a231594a99b76cb12fdfca\` FOREIGN KEY (\`institute_id\`) REFERENCES \`institutes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`teachers\` ADD CONSTRAINT \`FK_bfcb6097fd3b3c050c556a42d20\` FOREIGN KEY (\`branch_id\`) REFERENCES \`branches\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`teachers\` DROP FOREIGN KEY \`FK_bfcb6097fd3b3c050c556a42d20\``);
        await queryRunner.query(`ALTER TABLE \`teachers\` DROP FOREIGN KEY \`FK_96126a231594a99b76cb12fdfca\``);
        await queryRunner.query(`ALTER TABLE \`branches\` DROP FOREIGN KEY \`FK_e34a16813396bd43bb6a01464ce\``);
        await queryRunner.query(`ALTER TABLE \`students\` DROP FOREIGN KEY \`FK_d8fd2547dac91c4202e61a84e42\``);
        await queryRunner.query(`ALTER TABLE \`students\` DROP FOREIGN KEY \`FK_e2b424d1d926ec268413c32de59\``);
        await queryRunner.query(`ALTER TABLE \`students\` DROP FOREIGN KEY \`FK_293833a3218a32c7a2cda3693f3\``);
        await queryRunner.query(`ALTER TABLE \`enrollments\` DROP FOREIGN KEY \`FK_26fc1c926ec2d9e07ed686d85dc\``);
        await queryRunner.query(`ALTER TABLE \`enrollments\` DROP FOREIGN KEY \`FK_314e747891d5555efc344bd2887\``);
        await queryRunner.query(`ALTER TABLE \`enrollments\` DROP FOREIGN KEY \`FK_b79d0bf01779fdf9cfb6b092af3\``);
        await queryRunner.query(`ALTER TABLE \`enrollments\` DROP FOREIGN KEY \`FK_307813fe255896d6ebf3e6cd55c\``);
        await queryRunner.query(`ALTER TABLE \`courses\` DROP FOREIGN KEY \`FK_0899a88ebb5f8c308b7e1707b36\``);
        await queryRunner.query(`ALTER TABLE \`courses\` DROP FOREIGN KEY \`FK_657b103aa6e8df4e214e384a1a7\``);
        await queryRunner.query(`ALTER TABLE \`subjects\` DROP FOREIGN KEY \`FK_835122f9fd835b03ef36d817d60\``);
        await queryRunner.query(`ALTER TABLE \`batch_teachers\` DROP FOREIGN KEY \`FK_6771eaca94f3b321050b4bff834\``);
        await queryRunner.query(`ALTER TABLE \`batch_teachers\` DROP FOREIGN KEY \`FK_9ebbe67dc162b7cd815d3c091b7\``);
        await queryRunner.query(`ALTER TABLE \`batch_teachers\` DROP FOREIGN KEY \`FK_8b847abe999e5e85476fae8f05b\``);
        await queryRunner.query(`ALTER TABLE \`batches\` DROP FOREIGN KEY \`FK_271089b0c13ec85177e2fbb9606\``);
        await queryRunner.query(`ALTER TABLE \`batches\` DROP FOREIGN KEY \`FK_c333b8c19525fc0a855ff8c3082\``);
        await queryRunner.query(`ALTER TABLE \`batches\` DROP FOREIGN KEY \`FK_dbc9dbab0eddd33834beeeb4d7d\``);
        await queryRunner.query(`ALTER TABLE \`batches\` DROP FOREIGN KEY \`FK_a0490337d2e5b8aed63a4701c3f\``);
        await queryRunner.query(`ALTER TABLE \`batch_students\` DROP FOREIGN KEY \`FK_c772c73b33f91c7abf458bf35cf\``);
        await queryRunner.query(`ALTER TABLE \`batch_students\` DROP FOREIGN KEY \`FK_b9a386d62a48a5cc26fccca6f8f\``);
        await queryRunner.query(`ALTER TABLE \`student_documents\` DROP FOREIGN KEY \`FK_8b0e086cbeca4ba69aadaac8541\``);
        await queryRunner.query(`ALTER TABLE \`student_guardians\` DROP FOREIGN KEY \`FK_8194052bdd62204f061dd44e0c9\``);
        await queryRunner.query(`ALTER TABLE \`academic_sessions\` DROP FOREIGN KEY \`FK_66a69f03b7bb0b2c75fcabb3fa1\``);
        await queryRunner.query(`ALTER TABLE \`academic_sessions\` DROP FOREIGN KEY \`FK_715d7c57ad00ec445785d8349d2\``);
        await queryRunner.query(`ALTER TABLE \`admissions\` DROP FOREIGN KEY \`FK_de9f9d83281d67a8c49a87274ff\``);
        await queryRunner.query(`ALTER TABLE \`admissions\` DROP FOREIGN KEY \`FK_bd062437bb1f71af9e99a5fda36\``);
        await queryRunner.query(`ALTER TABLE \`admissions\` DROP FOREIGN KEY \`FK_7d958e4a9d315b162159854b87e\``);
        await queryRunner.query(`ALTER TABLE \`admissions\` DROP FOREIGN KEY \`FK_a6b4c8350fe376acb04b178f202\``);
        await queryRunner.query(`DROP INDEX \`IDX_7568c49a630907119e4a665c60\` ON \`teachers\``);
        await queryRunner.query(`DROP INDEX \`IDX_1882c07aedb478aca672340c82\` ON \`teachers\``);
        await queryRunner.query(`DROP TABLE \`teachers\``);
        await queryRunner.query(`DROP INDEX \`IDX_f370a4e41c80ddd11af1fea8a3\` ON \`institutes\``);
        await queryRunner.query(`DROP TABLE \`institutes\``);
        await queryRunner.query(`DROP INDEX \`IDX_9c06cbb83feb2f0be6263bd47e\` ON \`branches\``);
        await queryRunner.query(`DROP TABLE \`branches\``);
        await queryRunner.query(`DROP INDEX \`IDX_25985d58c714a4a427ced57507\` ON \`students\``);
        await queryRunner.query(`DROP INDEX \`IDX_60be61f5398fa190f5808f0bc0\` ON \`students\``);
        await queryRunner.query(`DROP TABLE \`students\``);
        await queryRunner.query(`DROP TABLE \`enrollments\``);
        await queryRunner.query(`DROP INDEX \`IDX_86b3589486bac01d2903e22471\` ON \`courses\``);
        await queryRunner.query(`DROP TABLE \`courses\``);
        await queryRunner.query(`DROP TABLE \`subjects\``);
        await queryRunner.query(`DROP INDEX \`IDX_e8b65c30a036f6785c753ab92d\` ON \`batch_teachers\``);
        await queryRunner.query(`DROP TABLE \`batch_teachers\``);
        await queryRunner.query(`DROP INDEX \`IDX_4c9f441d3c72ff374f73dfbd84\` ON \`batches\``);
        await queryRunner.query(`DROP TABLE \`batches\``);
        await queryRunner.query(`DROP TABLE \`batch_students\``);
        await queryRunner.query(`DROP TABLE \`student_documents\``);
        await queryRunner.query(`DROP TABLE \`student_guardians\``);
        await queryRunner.query(`DROP TABLE \`academic_sessions\``);
        await queryRunner.query(`DROP INDEX \`REL_7d958e4a9d315b162159854b87\` ON \`admissions\``);
        await queryRunner.query(`DROP INDEX \`IDX_1e8e97dc5fd8fa52299da982ec\` ON \`admissions\``);
        await queryRunner.query(`DROP TABLE \`admissions\``);
        await queryRunner.query(`DROP TABLE \`admission_leads\``);
    }

}
