import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';

@Controller('fee-structures')
export class FeeStructureController {

  @Get()
  getAll() {
    return { success: true, message: 'getAll fee-structures - coming soon' };
  }

  @Post()
  create(@Body() body: any) {
    return { success: true, message: 'create fee-structure - coming soon' };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return { success: true, message: 'update fee-structure - coming soon' };
  }

} 