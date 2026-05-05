import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestQuestion } from './entities/test-question.entity';
import { TestQuestionsController } from './test-questions.controller';
import { TestQuestionsService } from './test-questions.service';

@Module({
  imports: [TypeOrmModule.forFeature([TestQuestion])],
  controllers: [TestQuestionsController],
  providers: [TestQuestionsService],
})
export class TestQuestionsModule {}
