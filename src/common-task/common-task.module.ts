import { Module } from '@nestjs/common';
import { CommonTaskService } from './common-task.service';

@Module({
  providers: [CommonTaskService],
  exports: [CommonTaskService],
})
export class CommonTaskModule {}
