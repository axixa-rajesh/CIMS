import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Material } from './entities/material.entity';

@Injectable()
export class MaterialsRepository extends Repository<Material> {
  constructor(private dataSource: DataSource) {
    super(Material, dataSource.createEntityManager());
  }

  async findActiveMaterials() {
    return this.find({
      where: { status: 'active' },
    });
  }

  async findByTeacher(teacher_id: number) {
    return this.find({
      where: { teacher_id },
    });
  }
}