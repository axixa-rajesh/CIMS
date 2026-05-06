import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';

@Controller('student-fee-plans')
export class StudentFeePlanController {

  @Get()
  getAll() {
    return { success: true, message: 'getAll student-fee-plans - coming soon' };
  }

  @Post()
  create(@Body() body: any) {
    return { success: true, message: 'create student-fee-plan - coming soon' };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return { success: true, message: 'update student-fee-plan - coming soon' };
  }

}