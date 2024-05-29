import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './schema/task.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async findAll(): Promise<Task[]> {
    console.log('test');
    return this.appService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Task> {
    return this.appService.findOne(id);
  }

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.appService.create(createTaskDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() createTaskDto: CreateTaskDto,
  ): Promise<Task> {
    return this.appService.update(id, createTaskDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Task> {
    return this.appService.delete(id);
  }
}
