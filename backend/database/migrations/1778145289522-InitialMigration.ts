import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1778145289522 implements MigrationInterface {
    name = 'InitialMigration1778145289522'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`test_attempts\` (\`id\` varchar(36) NOT NULL, \`test_id\` varchar(255) NOT NULL, \`student_id\` varchar(255) NOT NULL, \`started_at\` datetime NOT NULL, \`submitted_at\` datetime NULL, \`obtained_marks\` int NULL, \`status\` varchar(255) NOT NULL DEFAULT 'PENDING', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`test_questions\` (\`id\` varchar(36) NOT NULL, \`test_id\` varchar(255) NOT NULL, \`question_text\` text NOT NULL, \`question_type\` varchar(50) NOT NULL, \`option_a\` varchar(255) NULL, \`option_b\` varchar(255) NULL, \`option_c\` varchar(255) NULL, \`option_d\` varchar(255) NULL, \`correct_answer\` varchar(255) NOT NULL, \`marks\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ticket_messages\` (\`id\` varchar(36) NOT NULL, \`ticket_id\` varchar(255) NOT NULL, \`sender_user_id\` varchar(255) NOT NULL, \`message_text\` text NOT NULL, \`attachment_url\` varchar(255) NULL, \`sent_at\` datetime NOT NULL, INDEX \`IDX_75b3a5f421dbf7b73778da519c\` (\`ticket_id\`), INDEX \`IDX_c5a611c7a231d6e89942272060\` (\`sender_user_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`tests\` (\`id\` varchar(36) NOT NULL, \`batch_id\` int NOT NULL, \`subject_id\` int NOT NULL, \`teacher_id\` int NOT NULL, \`title\` varchar(150) NOT NULL, \`test_type\` enum ('MCQ', 'Subjective') NOT NULL, \`test_date\` date NOT NULL, \`duration_minutes\` smallint NOT NULL, \`max_marks\` smallint NOT NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`results\` (\`id\` varchar(36) NOT NULL, \`student_id\` varchar(255) NOT NULL, \`test_id\` varchar(255) NOT NULL, \`batch_id\` varchar(255) NOT NULL, \`total_marks\` int NOT NULL, \`obtained_marks\` int NOT NULL, \`percentage\` float NOT NULL, \`grade\` varchar(10) NOT NULL, \`published_at\` datetime NULL, \`status\` varchar(255) NOT NULL DEFAULT 'DRAFT', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`notifications\` (\`id\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`message\` varchar(255) NOT NULL, \`user_id\` varchar(255) NOT NULL, \`module_name\` varchar(100) NOT NULL, \`reference_id\` varchar(255) NOT NULL, \`is_read\` tinyint NOT NULL DEFAULT 0, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`doubt_tickets\` (\`id\` varchar(36) NOT NULL, \`student_id\` varchar(255) NOT NULL, \`subject_id\` varchar(255) NOT NULL, \`teacher_id\` varchar(255) NOT NULL, \`title\` varchar(255) NOT NULL, \`description\` text NOT NULL, \`priority\` varchar(20) NOT NULL, \`ticket_status\` varchar(255) NOT NULL DEFAULT 'OPEN', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), INDEX \`IDX_fcd597783e76d750215a78ae4e\` (\`student_id\`), INDEX \`IDX_01477e73c0db0a0241fdd45adf\` (\`subject_id\`), INDEX \`IDX_0df5ed82ef7f136bffc530c2ff\` (\`teacher_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`notices\` (\`id\` varchar(36) NOT NULL, \`institute_id\` varchar(255) NOT NULL, \`branch_id\` varchar(255) NOT NULL, \`title\` varchar(150) NOT NULL, \`description\` text NOT NULL, \`notice_type\` varchar(50) NOT NULL, \`publish_at\` datetime NOT NULL, \`expiry_at\` datetime NOT NULL, \`created_by_user_id\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL DEFAULT 'ACTIVE', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), INDEX \`IDX_302212025a5e0fc704eac5b9fe\` (\`institute_id\`), INDEX \`IDX_985e5c91abf8a47efb84a16338\` (\`branch_id\`), INDEX \`IDX_320a8d5122a79aedbebbbaf7bd\` (\`created_by_user_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`notice_targets\` (\`id\` varchar(36) NOT NULL, \`notice_id\` varchar(255) NOT NULL, \`target_type\` varchar(50) NOT NULL, \`target_id\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), INDEX \`IDX_b305743a5bb0b5e82a86f5e44e\` (\`notice_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_b305743a5bb0b5e82a86f5e44e\` ON \`notice_targets\``);
        await queryRunner.query(`DROP TABLE \`notice_targets\``);
        await queryRunner.query(`DROP INDEX \`IDX_320a8d5122a79aedbebbbaf7bd\` ON \`notices\``);
        await queryRunner.query(`DROP INDEX \`IDX_985e5c91abf8a47efb84a16338\` ON \`notices\``);
        await queryRunner.query(`DROP INDEX \`IDX_302212025a5e0fc704eac5b9fe\` ON \`notices\``);
        await queryRunner.query(`DROP TABLE \`notices\``);
        await queryRunner.query(`DROP INDEX \`IDX_0df5ed82ef7f136bffc530c2ff\` ON \`doubt_tickets\``);
        await queryRunner.query(`DROP INDEX \`IDX_01477e73c0db0a0241fdd45adf\` ON \`doubt_tickets\``);
        await queryRunner.query(`DROP INDEX \`IDX_fcd597783e76d750215a78ae4e\` ON \`doubt_tickets\``);
        await queryRunner.query(`DROP TABLE \`doubt_tickets\``);
        await queryRunner.query(`DROP TABLE \`notifications\``);
        await queryRunner.query(`DROP TABLE \`results\``);
        await queryRunner.query(`DROP TABLE \`tests\``);
        await queryRunner.query(`DROP INDEX \`IDX_c5a611c7a231d6e89942272060\` ON \`ticket_messages\``);
        await queryRunner.query(`DROP INDEX \`IDX_75b3a5f421dbf7b73778da519c\` ON \`ticket_messages\``);
        await queryRunner.query(`DROP TABLE \`ticket_messages\``);
        await queryRunner.query(`DROP TABLE \`test_questions\``);
        await queryRunner.query(`DROP TABLE \`test_attempts\``);
    }

}
