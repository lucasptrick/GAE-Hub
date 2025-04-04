import { Controller, Get, Post, Body, Param, Delete, Patch, UseGuards, Request, HttpCode, NotFoundException } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Controller('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Post()
  create(@Body() createActivityDto: CreateActivityDto, @Request() req) {
    return this.activitiesService.create(createActivityDto, req.user.id);
  }

  @Get()
  findAll() {
    return this.activitiesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const activity = this.activitiesService.findOne(+id);
    if (!activity) throw new NotFoundException();
    return activity;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActivityDto: UpdateActivityDto) {
    return this.activitiesService.update(+id, updateActivityDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const activity = this.activitiesService.remove(+id);
    if (!activity) throw new NotFoundException();
  }
}
