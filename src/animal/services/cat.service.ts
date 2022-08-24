import { Injectable } from '@nestjs/common';
import { IAnimalService } from '../interfaces/animal.interface';

@Injectable()
export class CatService implements IAnimalService {
  name = 'Cat';
  getSound(): string {
    return 'Meow?';
  }
}
