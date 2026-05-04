import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClassroomsModule } from './modules/classrooms/classrooms.module';
import { TimetableSlotsModule } from './modules/timetable-slots/timetable-slots.module';
import { TimetablesModule } from './modules/timetables/timetables.module';
import { LiveClassesModule } from './modules/live-classes/live-classes.module';
import { AttendanceModule } from './modules/attendance/attendance.module';
import { LeaveRequestsModule } from './modules/leave-requests/leave-requests.module';
import { MaterialsModule } from './modules/materials/materials.module';
import { AssignmentsModule } from './modules/assignments/assignments.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        autoLoadEntities: true,
        synchronize: false, // Following Student 3's migration pattern
      }),
    }),
    ClassroomsModule,
    TimetableSlotsModule,
    TimetablesModule,
    LiveClassesModule,
    AttendanceModule,
    LeaveRequestsModule,
    MaterialsModule,
    AssignmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
