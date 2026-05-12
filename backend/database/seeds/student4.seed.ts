import { DataSource } from 'typeorm';
import { AppDataSource } from '../../src/database/data-source';

AppDataSource.initialize().then(async () => {
  await AppDataSource.query(`DELETE FROM assignments`);
await AppDataSource.query(`DELETE FROM materials`);
await AppDataSource.query(`DELETE FROM attendance_sessions`);
await AppDataSource.query(`DELETE FROM live_classes`);
await AppDataSource.query(`DELETE FROM timetables`);
await AppDataSource.query(`DELETE FROM class_rooms`);
  await AppDataSource.query(`
    INSERT INTO class_rooms
    (branch_id, room_name, room_code, capacity, status)
    VALUES
    (1,'Math Room','2001',50,'active')
  `);

  await AppDataSource.query(`
    INSERT INTO timetables
    (batch_id, subject_id, teacher_id, branch_id, session_id, class_room_id, slot_id, day_of_week, status)
    VALUES
    (1,1,2,1,1,1,1,'Monday','active')
  `);

  await AppDataSource.query(`
    INSERT INTO live_classes
    (batch_id, subject_id, teacher_id, branch_id, session_id, title, start_datetime, end_datetime, status)
    VALUES
    (1,1,2,1,1,'Math Revision Class','2026-05-06 10:00:00','2026-05-06 11:00:00','scheduled')
  `);

  await AppDataSource.query(`
    INSERT INTO attendance_sessions
    (batch_id, subject_id, teacher_id, branch_id, session_id, attendance_date, status)
    VALUES
    (1,1,2,1,1,'2026-05-06','draft')
  `);

  await AppDataSource.query(`
    INSERT INTO materials
    (subject_id, teacher_id, title, material_type, status)
    VALUES
    (1,2,'Chapter 1 Notes','pdf','active')
  `);

  await AppDataSource.query(`
    INSERT INTO assignments
    (batch_id, subject_id, teacher_id, title, due_date, status)
    VALUES
    (1,1,2,'Math Assignment 1','2026-05-15','published')
  `);

  console.log('Seed inserted');
  process.exit();
});