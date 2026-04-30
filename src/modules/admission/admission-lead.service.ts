import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdmissionLead } from './entities/admission-lead.entity';
import { CreateAdmissionLeadDto } from './dto/create-admission-lead.dto';
import { UpdateAdmissionLeadDto } from './dto/update-admission-lead.dto';

@Injectable()
export class AdmissionLeadService {
  constructor(
    @InjectRepository(AdmissionLead)
    private readonly admissionLeadRepository: Repository<AdmissionLead>,
  ) {}

  async create(createDto: CreateAdmissionLeadDto): Promise<AdmissionLead> {
    const lead = this.admissionLeadRepository.create(createDto);
    return await this.admissionLeadRepository.save(lead);
  }

  async findAll(): Promise<AdmissionLead[]> {
    return await this.admissionLeadRepository.find();
  }

  async findOne(id: string): Promise<AdmissionLead> {
    const lead = await this.admissionLeadRepository.findOne({ where: { id } });
    if (!lead) {
      throw new NotFoundException(`AdmissionLead with ID ${id} not found`);
    }
    return lead;
  }

  async update(id: string, updateDto: UpdateAdmissionLeadDto): Promise<AdmissionLead> {
    const lead = await this.findOne(id);
    const updated = Object.assign(lead, updateDto);
    return await this.admissionLeadRepository.save(updated);
  }

  async remove(id: string): Promise<void> {
    const lead = await this.findOne(id);
    await this.admissionLeadRepository.remove(lead);
  }
}
