import CatAPI from './CatAPI';
import { ApiBreed } from './interfaces/api/breed';
import { mapBreed } from '../converters/breed';
import { BreedModel } from './interfaces/models/breed';

class BreedsAPI extends CatAPI {
  public async getAllBreeds({
    attachBreed = 0,
    page = 1,
    limit = 20,
  }: {
    attachBreed?: number;
    page?: number;
    limit?: number;
  }): Promise<BreedModel[]> {
    const response: ApiBreed[] = await this.get('/v1/breeds', {
      attachBreed,
      page,
      limit,
    });

    return response.map(mapBreed);
  }

  public async searchBreeds({
    query,
  }: {
    query: string;
  }): Promise<BreedModel[]> {
    const response: ApiBreed[] = await this.get('/v1/breeds/search', {
      q: query,
    });

    return response.map(mapBreed);
  }
}

export default BreedsAPI;
