export interface IAnimalService {
  name: string;
  getSound(): string;
  getSize?(): Promise<string>;
}
