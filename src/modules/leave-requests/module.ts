import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeaveRequestsController } from './controller';
import { LeaveRequestsService } from './service';
import { LeaveRequestsRepository } from './repository';
// Add entity imports here

@Module({
  imports: [TypeOrmModule.forFeature([/* entities */])],
  controllers: [LeaveRequestsController],
  providers: [LeaveRequestsService, LeaveRequestsRepository],
  exports: [LeaveRequestsService],
})
export class LeaveRequestsModule {}
