import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;
@Schema()
export class Task {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ default: false })
  completed: Boolean;

  @Prop({ default: Date.now })
  createDate: Date;

  @Prop()
  completedDate: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
