import { Context, Order } from '../interfaces/common';
import { BreedModel } from '../datasource/interfaces/models/breed';
import { ImageModel } from '../datasource/interfaces/models/image';

const resolvers = {
  Query: {
    breeds(
      parent,
      {
        attachBreed,
        page,
        limit,
      }: { attachBreed?: number; page?: number; limit?: number },
      { dataSources }: Context
    ): Promise<BreedModel[]> {
      return dataSources.breedsAPI.getAllBreeds({ attachBreed, page, limit });
    },
    searchBreeds(
      parent,
      { query }: { query: string },
      { dataSources }: Context
    ): Promise<BreedModel[]> {
      return dataSources.breedsAPI.searchBreeds({ query });
    },
    images(
      parent,
      { limit, page, order }: { limit: number; page: number; order: Order },
      { dataSources }: Context
    ): Promise<ImageModel[]> {
      return dataSources.imagesAPI.getAllImages({ limit, page, order });
    },
  },
  Breed: {
    images(
      parent: BreedModel,
      { limit, order }: { limit: number; order: Order },
      { dataSources }: Context
    ): Promise<ImageModel[]> {
      return dataSources.imagesAPI.getAllImages({
        breedId: parent.id,
        limit,
        order,
      });
    },
  },
};

export default resolvers;
