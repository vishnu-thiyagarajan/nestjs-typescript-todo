import { Document } from 'mongoose';

export interface ITask extends Document {
  readonly title: string;
  readonly description: string;
  readonly completed: boolean;
  readonly createDate: Date;
  readonly completedDate: Date;
}
