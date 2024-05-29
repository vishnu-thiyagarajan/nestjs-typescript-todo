import { Module } from '@nestjs/common';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from '../schema/task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class TaskModule {}
