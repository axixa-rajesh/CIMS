import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FeeStructure } from './entities/fee_structure.entity';
import { CreateFeeStructureDto } from './feeStructure.validator';

@Injectable()
export class FeeStructureService {
  constructor(
    @InjectRepository(FeeStructure)
    private readonly feeStructureRepository: Repository<FeeStructure>,
  ) {}

  async findAll(filters?: any): Promise<FeeStructure[]> {
    return await this.feeStructureRepository.find({
      where: { status: 'ACTIVE', ...filters },
      order: { created_at: 'DESC' },
    });
  }

  async findOne(id: number): Promise<FeeStructure> {
    const record = await this.feeStructureRepository.findOne({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Fee Structure with ID ${id} not found`);
    }
    return record;
  }

  async create(dto: CreateFeeStructureDto): Promise<FeeStructure> {
    const record = this.feeStructureRepository.create(dto);
    return await this.feeStructureRepository.save(record);
  }

  async update(id: number, dto: Partial<CreateFeeStructureDto>): Promise<FeeStructure> {
    const record = await this.findOne(id);
    Object.assign(record, dto);
    return await this.feeStructureRepository.save(record);
  }
}
