import { BreedModel } from './breed';

export interface ImageModel {
  id: string;
  url: string;
  breeds: BreedModel[];
}
