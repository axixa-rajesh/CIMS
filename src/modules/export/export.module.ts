import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExportController } from './export.controller';
import { FileUpload } from './entities/file_upload.entity';
import { ExportService } from './export.service';

@Module({
  imports: [TypeOrmModule.forFeature([FileUpload])],
  controllers: [ExportController],
  providers: [ExportService],
  exports: [ExportService],
})
export class ExportModule {}