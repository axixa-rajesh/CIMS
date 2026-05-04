import { config } from 'dotenv';
import { join } from 'path';
import { DataSource } from 'typeorm';

config({ path: join(process.cwd(), '.env') });

import { Classroom } from '../modules/classrooms/entities/classroom.entity';
import { TimetableSlot } from '../modules/timetable-slots/entities/timetable-slot.entity';
import { Timetable } from '../modules/timetables/entities/timetable.entity';
import { LiveClass } from '../modules/live-classes/entities/live-class.entity';
import { LiveClassParticipant } from '../modules/live-classes/entities/live-class-participant.entity';
import { AttendanceSession } from '../modules/attendance/entities/attendance-session.entity';
import { AttendanceRecord } from '../modules/attendance/entities/attendance-record.entity';
import { LeaveRequest } from '../modules/leave-requests/entities/leave-request.entity';
import { Material } from '../modules/materials/entities/material.entity';
import { MaterialBatchMap } from '../modules/materials/entities/material-batch-map.entity';
import { Assignment } from '../modules/assignments/entities/assignment.entity';
import { AssignmentSubmission } from '../modules/assignments/entities/assignment-submission.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || '127.0.0.1',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'cims',
  entities: [
    Classroom,
    TimetableSlot,
    Timetable,
    LiveClass,
    LiveClassParticipant,
    AttendanceSession,
    AttendanceRecord,
    LeaveRequest,
    Material,
    MaterialBatchMap,
    Assignment,
    AssignmentSubmission,
  ],
  migrations: [join(process.cwd(), 'database/migrations/*.ts')],
  synchronize: false,
});
