import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileUpload } from './entities/file_upload.entity';

@Injectable()
export class ExportService {
  constructor(
    @InjectRepository(FileUpload)
    private readonly fileUploadRepository: Repository<FileUpload>,
  ) {}

  async findAll(filters?: any): Promise<FileUpload[]> {
    return await this.fileUploadRepository.find({
      where: filters,
      order: { created_at: 'DESC' },
    });
  }

  async saveExportLog(dto: any): Promise<FileUpload> {
    const log = this.fileUploadRepository.create(dto as object);
    return await this.fileUploadRepository.save(log as FileUpload);
  }
}
