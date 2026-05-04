import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LeaveRequestsService } from './leave-requests.service';
import { CreateLeaveRequestDto, UpdateLeaveRequestDto } from './dto/create-leave-request.dto';

@Controller('leave-requests')
export class LeaveRequestsController {
  constructor(private readonly leaveRequestsService: LeaveRequestsService) {}

  @Post()
  create(@Body() createLeaveRequestDto: CreateLeaveRequestDto) {
    return this.leaveRequestsService.create(createLeaveRequestDto);
  }

  @Get()
  findAll() {
    return this.leaveRequestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leaveRequestsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLeaveRequestDto: UpdateLeaveRequestDto) {
    return this.leaveRequestsService.update(+id, updateLeaveRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leaveRequestsService.remove(+id);
  }
}
