import { MigrationInterface, QueryRunner } from "typeorm";

export class Day6Relations1777796306880 implements MigrationInterface {
    name = 'Day6Relations1777796306880'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`admission_leads\` CHANGE \`parent_name\` \`parent_name\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`admission_leads\` CHANGE \`email\` \`email\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`admission_leads\` CHANGE \`course_interest\` \`course_interest\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`admission_leads\` CHANGE \`remarks\` \`remarks\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`admissions\` DROP FOREIGN KEY \`FK_a6b4c8350fe376acb04b178f202\``);
        await queryRunner.query(`ALTER TABLE \`admissions\` CHANGE \`lead_id\` \`lead_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`academic_sessions\` CHANGE \`start_date\` \`start_date\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`academic_sessions\` CHANGE \`end_date\` \`end_date\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`student_guardians\` CHANGE \`relation\` \`relation\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`student_guardians\` CHANGE \`phone\` \`phone\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`student_guardians\` CHANGE \`email\` \`email\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`student_guardians\` CHANGE \`occupation\` \`occupation\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`student_guardians\` CHANGE \`address\` \`address\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`batch_students\` CHANGE \`joined_on\` \`joined_on\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`batches\` CHANGE \`batch_mode\` \`batch_mode\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`batches\` CHANGE \`start_date\` \`start_date\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`batches\` CHANGE \`end_date\` \`end_date\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`batches\` CHANGE \`capacity\` \`capacity\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`batch_teachers\` CHANGE \`assigned_on\` \`assigned_on\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`subjects\` CHANGE \`description\` \`description\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`courses\` CHANGE \`description\` \`description\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`courses\` CHANGE \`duration\` \`duration\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`enrollments\` DROP FOREIGN KEY \`FK_314e747891d5555efc344bd2887\``);
        await queryRunner.query(`ALTER TABLE \`enrollments\` CHANGE \`batch_id\` \`batch_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`user_id\` \`user_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`roll_no\` \`roll_no\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`last_name\` \`last_name\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`gender\` \`gender\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`dob\` \`dob\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`email\` \`email\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`phone\` \`phone\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`address\` \`address\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`branches\` CHANGE \`code\` \`code\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`branches\` CHANGE \`phone\` \`phone\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`branches\` CHANGE \`email\` \`email\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`branches\` CHANGE \`address\` \`address\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`branches\` CHANGE \`city\` \`city\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`branches\` CHANGE \`state\` \`state\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`institutes\` CHANGE \`code\` \`code\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`institutes\` CHANGE \`email\` \`email\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`institutes\` CHANGE \`phone\` \`phone\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`institutes\` CHANGE \`website\` \`website\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`institutes\` CHANGE \`logo_url\` \`logo_url\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`institutes\` CHANGE \`address\` \`address\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`institutes\` CHANGE \`city\` \`city\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`institutes\` CHANGE \`state\` \`state\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`teachers\` CHANGE \`user_id\` \`user_id\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`teachers\` CHANGE \`phone\` \`phone\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`teachers\` CHANGE \`email\` \`email\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`teachers\` CHANGE \`qualification\` \`qualification\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`teachers\` CHANGE \`joining_date\` \`joining_date\` date NULL`);
        await queryRunner.query(`ALTER TABLE \`admissions\` ADD CONSTRAINT \`FK_a6b4c8350fe376acb04b178f202\` FOREIGN KEY (\`lead_id\`) REFERENCES \`admission_leads\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`enrollments\` ADD CONSTRAINT \`FK_314e747891d5555efc344bd2887\` FOREIGN KEY (\`batch_id\`) REFERENCES \`batches\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`enrollments\` DROP FOREIGN KEY \`FK_314e747891d5555efc344bd2887\``);
        await queryRunner.query(`ALTER TABLE \`admissions\` DROP FOREIGN KEY \`FK_a6b4c8350fe376acb04b178f202\``);
        await queryRunner.query(`ALTER TABLE \`teachers\` CHANGE \`joining_date\` \`joining_date\` date NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`teachers\` CHANGE \`qualification\` \`qualification\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`teachers\` CHANGE \`email\` \`email\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`teachers\` CHANGE \`phone\` \`phone\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`teachers\` CHANGE \`user_id\` \`user_id\` varchar(36) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`institutes\` CHANGE \`state\` \`state\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`institutes\` CHANGE \`city\` \`city\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`institutes\` CHANGE \`address\` \`address\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`institutes\` CHANGE \`logo_url\` \`logo_url\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`institutes\` CHANGE \`website\` \`website\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`institutes\` CHANGE \`phone\` \`phone\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`institutes\` CHANGE \`email\` \`email\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`institutes\` CHANGE \`code\` \`code\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`branches\` CHANGE \`state\` \`state\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`branches\` CHANGE \`city\` \`city\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`branches\` CHANGE \`address\` \`address\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`branches\` CHANGE \`email\` \`email\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`branches\` CHANGE \`phone\` \`phone\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`branches\` CHANGE \`code\` \`code\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`address\` \`address\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`phone\` \`phone\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`email\` \`email\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`dob\` \`dob\` date NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`gender\` \`gender\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`last_name\` \`last_name\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`roll_no\` \`roll_no\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`students\` CHANGE \`user_id\` \`user_id\` varchar(36) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`enrollments\` CHANGE \`batch_id\` \`batch_id\` varchar(36) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`enrollments\` ADD CONSTRAINT \`FK_314e747891d5555efc344bd2887\` FOREIGN KEY (\`batch_id\`) REFERENCES \`batches\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`courses\` CHANGE \`duration\` \`duration\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`courses\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`subjects\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`batch_teachers\` CHANGE \`assigned_on\` \`assigned_on\` date NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`batches\` CHANGE \`capacity\` \`capacity\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`batches\` CHANGE \`end_date\` \`end_date\` date NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`batches\` CHANGE \`start_date\` \`start_date\` date NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`batches\` CHANGE \`batch_mode\` \`batch_mode\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`batch_students\` CHANGE \`joined_on\` \`joined_on\` date NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`student_guardians\` CHANGE \`address\` \`address\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`student_guardians\` CHANGE \`occupation\` \`occupation\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`student_guardians\` CHANGE \`email\` \`email\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`student_guardians\` CHANGE \`phone\` \`phone\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`student_guardians\` CHANGE \`relation\` \`relation\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`academic_sessions\` CHANGE \`end_date\` \`end_date\` date NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`academic_sessions\` CHANGE \`start_date\` \`start_date\` date NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`admissions\` CHANGE \`lead_id\` \`lead_id\` varchar(36) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`admissions\` ADD CONSTRAINT \`FK_a6b4c8350fe376acb04b178f202\` FOREIGN KEY (\`lead_id\`) REFERENCES \`admission_leads\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`admission_leads\` CHANGE \`remarks\` \`remarks\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`admission_leads\` CHANGE \`course_interest\` \`course_interest\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`admission_leads\` CHANGE \`email\` \`email\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`admission_leads\` CHANGE \`parent_name\` \`parent_name\` varchar(255) NULL DEFAULT 'NULL'`);
    }

}
