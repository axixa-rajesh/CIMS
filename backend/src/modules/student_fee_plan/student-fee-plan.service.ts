import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentFeePlan } from './entities/student_fee_plan.entity';
import { CreateStudentFeePlanDto } from './studentFeePlan.validator';

@Injectable()
export class StudentFeePlanService {
  constructor(
    @InjectRepository(StudentFeePlan)
    private readonly studentFeePlanRepository: Repository<StudentFeePlan>,
  ) {}

  async findAll(filters?: any): Promise<StudentFeePlan[]> {
    return await this.studentFeePlanRepository.find({
      where: { status: 'ACTIVE', ...filters },
      relations: ['feeStructure'],
      order: { created_at: 'DESC' },
    });
  }

  async findOne(id: number): Promise<StudentFeePlan> {
    const record = await this.studentFeePlanRepository.findOne({
      where: { id },
      relations: ['feeStructure'],
    });
    if (!record) {
      throw new NotFoundException(`Student Fee Plan with ID ${id} not found`);
    }
    return record;
  }

  async create(dto: CreateStudentFeePlanDto): Promise<StudentFeePlan> {
    const record = this.studentFeePlanRepository.create(dto);
    return await this.studentFeePlanRepository.save(record);
  }

  async update(id: number, dto: Partial<CreateStudentFeePlanDto>): Promise<StudentFeePlan> {
    const record = await this.findOne(id);
    Object.assign(record, dto);
    return await this.studentFeePlanRepository.save(record);
  }
}
