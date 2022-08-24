import { Injectable } from '@nestjs/common';
import { IAnimalService } from '../interfaces/animal.interface';

@Injectable()
export class DogService implements IAnimalService {
  name = 'Dog';
  getSound(): string {
    return 'Woof!';
  }
  async getSize() {
    await new Promise((res) => setTimeout(res, 200));
    return 'Small';
  }
}
