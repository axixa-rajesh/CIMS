import { Injectable } from '@nestjs/common';
import { MaterialsRepository } from './repository';
import { CreateMaterialDto } from './dto/create.dto';

@Injectable()
export class MaterialsService {
  constructor(private readonly repository: MaterialsRepository) {}

  create(createDto: CreateMaterialDto) {
    return 'This action adds a new materials';
  }

  findAll() {
    return `This action returns all materials`;
  }
}
