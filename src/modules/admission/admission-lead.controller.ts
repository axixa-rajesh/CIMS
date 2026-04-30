import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { AdmissionLeadService } from './admission-lead.service';
import { CreateAdmissionLeadDto } from './dto/create-admission-lead.dto';
import { UpdateAdmissionLeadDto } from './dto/update-admission-lead.dto';

@Controller('admission-leads')
export class AdmissionLeadController {
  constructor(private readonly admissionLeadService: AdmissionLeadService) {}

  @Post()
  create(@Body() createDto: CreateAdmissionLeadDto) {
    return this.admissionLeadService.create(createDto);
  }

  @Get()
  findAll() {
    return this.admissionLeadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.admissionLeadService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateDto: UpdateAdmissionLeadDto) {
    return this.admissionLeadService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.admissionLeadService.remove(id);
  }
}
