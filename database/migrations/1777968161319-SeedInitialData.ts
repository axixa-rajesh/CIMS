import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedInitialData1777968161319 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
    INSERT INTO institutes (id, name, code, status)
    VALUES ('11111111-1111-1111-1111-111111111111', 'ABC Institute', 'ABC001', 'ACTIVE');
  `);

  await queryRunner.query(`
    INSERT INTO branches (id, institute_id, name, status)
    VALUES 
    ('22222222-2222-2222-2222-222222222222', '11111111-1111-1111-1111-111111111111', 'Computer Science', 'ACTIVE'),
    ('22222222-2222-2222-2222-222222222223', '11111111-1111-1111-1111-111111111111', 'Information Technology', 'ACTIVE');
  `);

  await queryRunner.query(`
    INSERT INTO academic_sessions (id, institute_id, branch_id, name, is_current, status)
    VALUES (
      '33333333-3333-3333-3333-333333333333',
      '11111111-1111-1111-1111-111111111111',
      '22222222-2222-2222-2222-222222222222',
      '2025-26', 1, 'ACTIVE'
    );
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
