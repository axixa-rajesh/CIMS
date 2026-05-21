import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
// import { ClassRoom } from './entities/classroom.entity';

@Injectable()
export class ClassroomsRepository {
  constructor(private dataSource: DataSource) {}
  
  // Custom query methods here
}
