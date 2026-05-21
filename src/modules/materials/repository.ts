import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
// import { Material } from './entities/material.entity';

@Injectable()
export class MaterialsRepository {
  constructor(private dataSource: DataSource) {}
  
  // Custom query methods here
}
