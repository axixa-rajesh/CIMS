import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestAttempt } from './entities/test-attempt.entity';
import { TestAttemptsController } from './test-attempts.controller';
import { TestAttemptsService } from './test-attempts.service';

@Module({
  imports: [TypeOrmModule.forFeature([TestAttempt])],
  controllers: [TestAttemptsController],
  providers: [TestAttemptsService],
})
export class TestAttemptsModule {}
