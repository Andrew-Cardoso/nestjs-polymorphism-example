import { Injectable } from '@nestjs/common';
import { CommonTaskService } from '../common-task/common-task.service';
import { IAnimalService } from './interfaces/animal.interface';

@Injectable()
export class AnimalService {
  constructor(
    private readonly taskService: CommonTaskService,
    private readonly animal: IAnimalService,
  ) {}

  makeSound() {
    const sound = this.animal.getSound();
    console.log(sound);
  }

  async getSize() {
    const size = await this.animal.getSize?.();
    this.taskService.doTask(this.animal.name);
    return size;
  }
}
