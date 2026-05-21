import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
// import { LiveClass } from './entities/liveclass.entity';

@Injectable()
export class LiveClassesRepository {
  constructor(private dataSource: DataSource) {}
  
  // Custom query methods here
}
