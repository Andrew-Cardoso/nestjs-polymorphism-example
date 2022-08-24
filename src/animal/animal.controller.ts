import { Controller, Inject } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalServicesEnum } from './utils/provide';

@Controller('animal')
export class AnimalController {
  constructor(
    @Inject(AnimalServicesEnum.COW) cowService: AnimalService,
    @Inject(AnimalServicesEnum.DOG) dogService: AnimalService,
    @Inject(AnimalServicesEnum.CAT) catService: AnimalService,
  ) {
    Promise.all([
      cowService.getSize(),
      dogService.getSize(),
      catService.getSize(),
    ]).then(console.log);
  }
}
