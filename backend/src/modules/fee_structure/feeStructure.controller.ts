import { Controller, Get, Post, Put, Body, Param, UseGuards } from '@nestjs/common';
import { FeeStructureService } from './fee-structure.service';
import { CreateFeeStructureDto } from './feeStructure.validator';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@Controller('fee-structures')
@UseGuards(RolesGuard)
export class FeeStructureController {
  constructor(private readonly feeStructureService: FeeStructureService) {}

  @Get()
  @Roles('ADMIN', 'ACCOUNTS', 'FINANCE')
  findAll() {
    return this.feeStructureService.findAll();
  }

  @Get(':id')
  @Roles('ADMIN', 'ACCOUNTS', 'FINANCE')
  findOne(@Param('id') id: number) {
    return this.feeStructureService.findOne(id);
  }

  @Post()
  @Roles('ADMIN')
  create(@Body() dto: CreateFeeStructureDto) {
    return this.feeStructureService.create(dto);
  }

  @Put(':id')
  @Roles('ADMIN')
  update(@Param('id') id: number, @Body() dto: Partial<CreateFeeStructureDto>) {
    return this.feeStructureService.update(id, dto);
  }
}