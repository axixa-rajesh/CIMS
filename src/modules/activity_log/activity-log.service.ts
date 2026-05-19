import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActivityLog } from './entities/activity_log.entity';

@Injectable()
export class ActivityLogService {
  constructor(
    @InjectRepository(ActivityLog)
    private readonly activityLogRepository: Repository<ActivityLog>,
  ) {}

  async log(data: { user_id?: number; action: string; module: string; details?: string; ip_address?: string }): Promise<ActivityLog> {
    const log = this.activityLogRepository.create(data);
    return await this.activityLogRepository.save(log);
  }

  async logFinanceAction(userId: number, action: string, details: string): Promise<ActivityLog> {
    return await this.log({
      user_id: userId,
      action,
      module: 'FINANCE',
      details,
    });
  }

  async getUserActivity(userId: number): Promise<ActivityLog[]> {
    return await this.activityLogRepository.find({
      where: { user_id: userId },
      order: { created_at: 'DESC' },
    });
  }
}
