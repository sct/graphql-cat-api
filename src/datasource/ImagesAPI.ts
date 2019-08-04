import CatAPI from './CatAPI';
import { ApiImage } from './interfaces/api/image';
import { mapImage } from '../converters/image';
import { ImageModel } from './interfaces/models/image';
import { Order } from '../interfaces/common';

interface ImagesRequest {
  breedId?: string;
  page?: number;
  limit: number;
  order: Order;
}

class ImagesAPI extends CatAPI {
  public async getAllImages({
    breedId,
    limit = 5,
    page = 1,
    order = Order.RANDOM,
  }: ImagesRequest): Promise<ImageModel[]> {
    const requestObject: {
      limit: number;
      page: number;
      order: Order;
      breed_id?: string;
    } = {
      limit,
      page,
      order,
    };
    if (breedId) {
      requestObject.breed_id = breedId;
    }
    const response: ApiImage[] = await this.get(
      '/v1/images/search',
      requestObject
    );

    return response.map(mapImage);
  }
}

export default ImagesAPI;
