import { ApiImage } from '../datasource/interfaces/api/image';
import { ImageModel } from '../datasource/interfaces/models/image';
import { mapBreed } from './breed';

export const mapImage = (image: ApiImage): ImageModel => ({
  id: image.id,
  url: image.url,
  breeds: image.breeds.map(mapBreed),
});
