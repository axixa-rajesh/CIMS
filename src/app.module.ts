import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './modules/students/students.module';
import { AcademicModule } from './modules/academic/academic.module';
import { AdmissionLeadsModule } from './modules/admission-leads/admission-leads.module';
import { AdmissionsModule } from './modules/admissions/admissions.module';
import { GuardiansModule } from './modules/guardians/guardians.module';
import { TeachersModule } from './modules/teachers/teachers.module';
import { CoursesModule } from './modules/courses/courses.module';
import { SubjectsModule } from './modules/subjects/subjects.module';
import { BatchesModule } from './modules/batches/batches.module';
import { EnrollmentsModule } from './modules/enrollments/enrollments.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || '127.0.0.1',
      port: parseInt(process.env.DB_PORT || '3306', 10),
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE || 'cims',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    AcademicModule,
    AdmissionLeadsModule,
    AdmissionsModule,
    StudentsModule,
    GuardiansModule,
    TeachersModule,
    CoursesModule,
    SubjectsModule,
    BatchesModule,
    EnrollmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
