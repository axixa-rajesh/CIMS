import { Controller, Get, Post, Put, Body, Param, UseGuards } from '@nestjs/common';
import { StudentFeePlanService } from './student-fee-plan.service';
import { CreateStudentFeePlanDto } from './studentFeePlan.validator';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@Controller('student-fee-plans')
@UseGuards(RolesGuard)
export class StudentFeePlanController {
  constructor(private readonly studentFeePlanService: StudentFeePlanService) {}

  @Get()
  @Roles('ADMIN', 'ACCOUNTS', 'FINANCE')
  findAll() {
    return this.studentFeePlanService.findAll();
  }

  @Get(':id')
  @Roles('ADMIN', 'ACCOUNTS', 'FINANCE')
  findOne(@Param('id') id: number) {
    return this.studentFeePlanService.findOne(id);
  }

  @Post()
  @Roles('ADMIN', 'ACCOUNTS')
  create(@Body() dto: CreateStudentFeePlanDto) {
    return this.studentFeePlanService.create(dto);
  }

  @Put(':id')
  @Roles('ADMIN', 'ACCOUNTS')
  update(@Param('id') id: number, @Body() dto: Partial<CreateStudentFeePlanDto>) {
    return this.studentFeePlanService.update(id, dto);
  }
}