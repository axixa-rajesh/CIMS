import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestsModule } from './modules/tests/tests.module';
import { TestQuestionsModule } from './modules/test-questions/test-questions.module';
import { TestAttemptsModule } from './modules/test-attempts/test-attempts.module';
import { ResultsModule } from './modules/results/results.module';
import { NoticesModule } from './modules/notices/notices.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { DoubtTicketsModule } from './modules/doubt-tickets/doubt-tickets.module';
import { TicketMessagesModule } from './modules/ticket-messages/ticket-messages.module';
import { NoticeTargetsModule } from './modules/notice-targets/notice-targets.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,

      autoLoadEntities: true,
      synchronize: false,
    }), 
    
    TestsModule, TestQuestionsModule, TestAttemptsModule, ResultsModule, NoticesModule, NotificationsModule, DoubtTicketsModule, TicketMessagesModule, NoticeTargetsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
