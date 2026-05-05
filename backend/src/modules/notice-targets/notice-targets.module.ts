import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoticeTarget } from './entities/notice-target.entity';
import { NoticeTargetsController } from './notice-targets.controller';
import { NoticeTargetsService } from './notice-targets.service';

@Module({
  imports: [TypeOrmModule.forFeature([NoticeTarget])],
  controllers: [NoticeTargetsController],
  providers: [NoticeTargetsService],
})
export class NoticeTargetsModule {}
