import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './module/task.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mrtvishnu:mrtvishnu@cluster0.vyijyjt.mongodb.net/ToDoDB?retryWrites=true&w=majority&appName=Cluster0',
      { dbName: 'ToDoDB' },
    ),
    TaskModule,
  ],
})
export class AppModule {}
