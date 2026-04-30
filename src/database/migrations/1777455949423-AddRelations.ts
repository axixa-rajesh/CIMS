import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelations1777455949423 implements MigrationInterface {
    name = 'AddRelations1777455949423'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`institutes\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`branches\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`academic_sessions\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`students\` ADD \`session_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`roll_no\` \`roll_no\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`gender\` \`gender\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`dob\` \`dob\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`email\` \`email\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`phone\` \`phone\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`address\` \`address\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`institute_id\` \`institute_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`branch_id\` \`branch_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`teachers\` CHANGE \`institute_id\` \`institute_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`teachers\` CHANGE \`branch_id\` \`branch_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`teachers\` CHANGE \`user_id\` \`user_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`teachers\` CHANGE \`phone\` \`phone\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`teachers\` CHANGE \`email\` \`email\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`teachers\` CHANGE \`qualification\` \`qualification\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`teachers\` CHANGE \`joining_date\` \`joining_date\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`student_guardians\` CHANGE \`relation\` \`relation\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`student_guardians\` CHANGE \`phone\` \`phone\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`student_guardians\` CHANGE \`email\` \`email\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`student_guardians\` CHANGE \`occupation\` \`occupation\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`student_guardians\` CHANGE \`address\` \`address\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`admission_leads\` CHANGE \`parent_name\` \`parent_name\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`admission_leads\` CHANGE \`email\` \`email\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`admission_leads\` CHANGE \`course_interest\` \`course_interest\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`admission_leads\` CHANGE \`remarks\` \`remarks\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`admissions\` DROP FOREIGN KEY \`FK_a6b4c8350fe376acb04b178f202\``);
        await queryRunner.query(`ALTER TABLE \`admissions\` CHANGE \`lead_id\` \`lead_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`admissions\` CHANGE \`branch_id\` \`branch_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`admissions\` CHANGE \`session_id\` \`session_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`courses\` CHANGE \`description\` \`description\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`courses\` CHANGE \`duration\` \`duration\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`subjects\` CHANGE \`description\` \`description\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`batches\` CHANGE \`batch_mode\` \`batch_mode\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`batches\` CHANGE \`start_date\` \`start_date\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`batches\` CHANGE \`end_date\` \`end_date\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`batches\` CHANGE \`capacity\` \`capacity\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`enrollments\` DROP FOREIGN KEY \`FK_314e747891d5555efc344bd2887\``);
        await queryRunner.query(`ALTER TABLE \`enrollments\` CHANGE \`batch_id\` \`batch_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`batch_teachers\` CHANGE \`assigned_on\` \`assigned_on\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`batch_students\` CHANGE \`joined_on\` \`joined_on\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` ADD CONSTRAINT \`FK_293833a3218a32c7a2cda3693f3\` FOREIGN KEY (\`institute_id\`) REFERENCES \`institutes\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`students\` ADD CONSTRAINT \`FK_e2b424d1d926ec268413c32de59\` FOREIGN KEY (\`branch_id\`) REFERENCES \`branches\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`students\` ADD CONSTRAINT \`FK_d8fd2547dac91c4202e61a84e42\` FOREIGN KEY (\`session_id\`) REFERENCES \`academic_sessions\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`admissions\` ADD CONSTRAINT \`FK_a6b4c8350fe376acb04b178f202\` FOREIGN KEY (\`lead_id\`) REFERENCES \`admission_leads\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`admissions\` ADD CONSTRAINT \`FK_bd062437bb1f71af9e99a5fda36\` FOREIGN KEY (\`branch_id\`) REFERENCES \`branches\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`admissions\` ADD CONSTRAINT \`FK_de9f9d83281d67a8c49a87274ff\` FOREIGN KEY (\`session_id\`) REFERENCES \`academic_sessions\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`enrollments\` ADD CONSTRAINT \`FK_314e747891d5555efc344bd2887\` FOREIGN KEY (\`batch_id\`) REFERENCES \`batches\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`enrollments\` DROP FOREIGN KEY \`FK_314e747891d5555efc344bd2887\``);
        await queryRunner.query(`ALTER TABLE \`admissions\` DROP FOREIGN KEY \`FK_de9f9d83281d67a8c49a87274ff\``);
        await queryRunner.query(`ALTER TABLE \`admissions\` DROP FOREIGN KEY \`FK_bd062437bb1f71af9e99a5fda36\``);
        await queryRunner.query(`ALTER TABLE \`admissions\` DROP FOREIGN KEY \`FK_a6b4c8350fe376acb04b178f202\``);
        await queryRunner.query(`ALTER TABLE \`students\` DROP FOREIGN KEY \`FK_d8fd2547dac91c4202e61a84e42\``);
        await queryRunner.query(`ALTER TABLE \`students\` DROP FOREIGN KEY \`FK_e2b424d1d926ec268413c32de59\``);
        await queryRunner.query(`ALTER TABLE \`students\` DROP FOREIGN KEY \`FK_293833a3218a32c7a2cda3693f3\``);
        await queryRunner.query(`ALTER TABLE \`batch_students\` CHANGE \`joined_on\` \`joined_on\` date NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`batch_teachers\` CHANGE \`assigned_on\` \`assigned_on\` date NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`enrollments\` CHANGE \`batch_id\` \`batch_id\` varchar(36) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`enrollments\` ADD CONSTRAINT \`FK_314e747891d5555efc344bd2887\` FOREIGN KEY (\`batch_id\`) REFERENCES \`batches\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`batches\` CHANGE \`capacity\` \`capacity\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`batches\` CHANGE \`end_date\` \`end_date\` date NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`batches\` CHANGE \`start_date\` \`start_date\` date NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`batches\` CHANGE \`batch_mode\` \`batch_mode\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`subjects\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`courses\` CHANGE \`duration\` \`duration\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`courses\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`admissions\` CHANGE \`session_id\` \`session_id\` varchar(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`admissions\` CHANGE \`branch_id\` \`branch_id\` varchar(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`admissions\` CHANGE \`lead_id\` \`lead_id\` varchar(36) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`admissions\` ADD CONSTRAINT \`FK_a6b4c8350fe376acb04b178f202\` FOREIGN KEY (\`lead_id\`) REFERENCES \`admission_leads\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`admission_leads\` CHANGE \`remarks\` \`remarks\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`admission_leads\` CHANGE \`course_interest\` \`course_interest\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`admission_leads\` CHANGE \`email\` \`email\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`admission_leads\` CHANGE \`parent_name\` \`parent_name\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`student_guardians\` CHANGE \`address\` \`address\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`student_guardians\` CHANGE \`occupation\` \`occupation\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`student_guardians\` CHANGE \`email\` \`email\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`student_guardians\` CHANGE \`phone\` \`phone\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`student_guardians\` CHANGE \`relation\` \`relation\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`teachers\` CHANGE \`joining_date\` \`joining_date\` date NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`teachers\` CHANGE \`qualification\` \`qualification\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`teachers\` CHANGE \`email\` \`email\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`teachers\` CHANGE \`phone\` \`phone\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`teachers\` CHANGE \`user_id\` \`user_id\` varchar(36) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`teachers\` CHANGE \`branch_id\` \`branch_id\` varchar(36) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`teachers\` CHANGE \`institute_id\` \`institute_id\` varchar(36) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`branch_id\` \`branch_id\` varchar(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`institute_id\` \`institute_id\` varchar(36) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`address\` \`address\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`phone\` \`phone\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`email\` \`email\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`dob\` \`dob\` date NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`gender\` \`gender\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`roll_no\` \`roll_no\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`students\` DROP COLUMN \`session_id\``);
        await queryRunner.query(`DROP TABLE \`academic_sessions\``);
        await queryRunner.query(`DROP TABLE \`branches\``);
        await queryRunner.query(`DROP TABLE \`institutes\``);
    }

}
