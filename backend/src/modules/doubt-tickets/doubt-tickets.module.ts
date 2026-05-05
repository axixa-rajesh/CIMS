import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DoubtTicket } from './entities/doubt-ticket.entity';
import { DoubtTicketsController } from './doubt-tickets.controller';
import { DoubtTicketsService } from './doubt-tickets.service';

@Module({
  imports: [TypeOrmModule.forFeature([DoubtTicket])],
  controllers: [DoubtTicketsController],
  providers: [DoubtTicketsService],
})
export class DoubtTicketsModule {}
