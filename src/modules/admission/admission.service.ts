import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admission } from './entities/admission.entity';
import { CreateAdmissionDto } from './dto/create-admission.dto';
import { UpdateAdmissionDto } from './dto/update-admission.dto';

@Injectable()
export class AdmissionService {
  constructor(
    @InjectRepository(Admission)
    private readonly admissionRepository: Repository<Admission>,
  ) {}

  async create(createDto: CreateAdmissionDto): Promise<Admission> {
    const admission = this.admissionRepository.create(createDto);
    return await this.admissionRepository.save(admission);
  }

  async findAll(): Promise<Admission[]> {
    return await this.admissionRepository.find({ relations: ['lead'] });
  }

  async findOne(id: string): Promise<Admission> {
    const admission = await this.admissionRepository.findOne({ where: { id }, relations: ['lead'] });
    if (!admission) {
      throw new NotFoundException(`Admission with ID ${id} not found`);
    }
    return admission;
  }

  async update(id: string, updateDto: UpdateAdmissionDto): Promise<Admission> {
    const admission = await this.findOne(id);
    const updated = Object.assign(admission, updateDto);
    return await this.admissionRepository.save(updated);
  }

  async remove(id: string): Promise<void> {
    const admission = await this.findOne(id);
    await this.admissionRepository.remove(admission);
  }
}
