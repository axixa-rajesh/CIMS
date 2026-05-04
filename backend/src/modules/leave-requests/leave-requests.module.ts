import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeaveRequestsController } from './leave-requests.controller';
import { LeaveRequestsService } from './leave-requests.service';
import { LeaveRequestsRepository } from './leave-requests.repository';
import { LeaveRequest } from './entities/leave-request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LeaveRequest])],
  controllers: [LeaveRequestsController],
  providers: [LeaveRequestsService, LeaveRequestsRepository],
})
export class LeaveRequestsModule {}
