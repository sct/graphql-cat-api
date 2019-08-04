import { ApiBreed } from '../datasource/interfaces/api/breed';
import { BreedModel } from '../datasource/interfaces/models/breed';

export const mapBreed = (breed: ApiBreed): BreedModel => ({
  id: breed.id,
  name: breed.name,
  temperament: breed.temperament,
  lifeSpan: breed.life_span,
  altNames: breed.alt_names,
  wikipediaUrl: breed.wikipedia_url,
  origin: breed.origin,
  hairless: !!breed.hairless,
  natural: !!breed.natural,
  rare: !!breed.rare,
});
