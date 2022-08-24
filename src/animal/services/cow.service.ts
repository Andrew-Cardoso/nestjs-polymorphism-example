import { Injectable } from '@nestjs/common';
import { IAnimalService } from '../interfaces/animal.interface';

@Injectable()
export class CowService implements IAnimalService {
  name = 'Cow';
  getSound(): string {
    return 'Muuu...';
  }
  async getSize() {
    await new Promise((res) => setTimeout(res, 400));
    return 'Big';
  }
}
