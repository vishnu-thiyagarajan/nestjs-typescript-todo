import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './schema/task.schema';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class AppService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async findAll(): Promise<Task[]> {
    const res = await this.taskModel.find().exec();
    console.log(res);
    return res;
  }

  async findOne(id: string): Promise<Task> {
    const task = await this.taskModel.findById(id).exec();
    return task;
  }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = new this.taskModel(createTaskDto);
    return task.save();
  }

  async update(id: string, updateTaskDto: CreateTaskDto): Promise<Task> {
    const task = await this.taskModel
      .findByIdAndUpdate(id, updateTaskDto, { new: true })
      .exec();
    return task;
  }

  async delete(id: string): Promise<Task> {
    const task = await this.taskModel.findByIdAndDelete(id).exec();
    return task;
  }
}
