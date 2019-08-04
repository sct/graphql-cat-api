import { ApiBreed } from './breed';

export interface ApiImage {
  id: string;
  url: string;
  breeds: ApiBreed[];
}
