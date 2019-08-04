import BreedsAPI from '../datasource/BreedsAPI';
import { Request, Response } from 'express';
import ImagesAPI from '../datasource/ImagesAPI';

export interface Context {
  req: Request;
  res: Response;
  dataSources: {
    breedsAPI: BreedsAPI;
    imagesAPI: ImagesAPI;
  };
}

export enum Order {
  RANDOM = 'RANDOM',
  ASC = 'ASC',
  DESC = 'DESC',
}
