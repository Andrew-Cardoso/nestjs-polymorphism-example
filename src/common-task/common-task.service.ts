import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonTaskService {
  doTask(animal: string) {
    console.log(`The ${animal} is doing his/her thing`);
  }
}
