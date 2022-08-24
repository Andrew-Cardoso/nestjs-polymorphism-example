import { Module } from '@nestjs/common';
import { CommonTaskModule } from '../common-task/common-task.module';
import { AnimalController } from './animal.controller';
import { CatService } from './services/cat.service';
import { CowService } from './services/cow.service';
import { DogService } from './services/dog.service';
import { AnimalServicesEnum, provide } from './utils/provide';

@Module({
  imports: [CommonTaskModule],
  providers: [
    CowService,
    CatService,
    DogService,
    provide(AnimalServicesEnum.COW, CowService),
    provide(AnimalServicesEnum.CAT, CatService),
    provide(AnimalServicesEnum.DOG, DogService),
  ],
  controllers: [AnimalController],
  exports: [
    AnimalServicesEnum.COW,
    AnimalServicesEnum.CAT,
    AnimalServicesEnum.DOG,
  ],
})
export class AnimalModule {}
