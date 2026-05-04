import { Injectable } from '@nestjs/common';
import { MaterialsRepository } from './materials.repository';
import { CreateMaterialDto, UpdateMaterialDto } from './dto/create-material.dto';

@Injectable()
export class MaterialsService {
  constructor(private readonly materialsRepository: MaterialsRepository) {}

  create(createMaterialDto: CreateMaterialDto) {
    return this.materialsRepository.save(createMaterialDto);
  }

  findAll() {
    return this.materialsRepository.find();
  }

  findOne(id: number) {
    return this.materialsRepository.findOneBy({ id: id as any });
  }

  update(id: number, updateMaterialDto: UpdateMaterialDto) {
    return this.materialsRepository.update(id, updateMaterialDto);
  }

  remove(id: number) {
    return this.materialsRepository.delete(id);
  }
}
