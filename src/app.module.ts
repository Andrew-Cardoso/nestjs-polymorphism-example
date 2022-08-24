import { Module } from '@nestjs/common';
import { AnimalModule } from './animal/animal.module';
import { CommonTaskModule } from './common-task/common-task.module';

@Module({
  imports: [AnimalModule, CommonTaskModule],
})
export class AppModule {}
