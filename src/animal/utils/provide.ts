import { InjectionToken, Provider } from '@nestjs/common';
import { CommonTaskService } from '../../common-task/common-task.service';
import { AnimalService } from '../animal.service';

type Provide = (
  name: AnimalServicesEnum,
  service: InjectionToken,
) => Provider<any>;

export const provide: Provide = (name, service) => ({
  provide: name,
  inject: [CommonTaskService, service],
  useFactory: (taskService: CommonTaskService, _service) =>
    new AnimalService(taskService, _service),
});

export enum AnimalServicesEnum {
  COW = 'Cow',
  CAT = 'Cat',
  DOG = 'Dog',
}
