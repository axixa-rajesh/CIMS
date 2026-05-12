import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketMessage } from './entities/ticket-message.entity';
import { TicketMessagesController } from './ticket-messages.controller';
import { TicketMessagesService } from './ticket-messages.service';

@Module({
  imports: [TypeOrmModule.forFeature([TicketMessage])],
  controllers: [TicketMessagesController],
  providers: [TicketMessagesService],
})
export class TicketMessagesModule {}
