import BreedsAPI from '../datasource/BreedsAPI';
import { Request, Response } from 'express';
import ImagesAPI from '../datasource/ImagesAPI';
import VotesAPI from '../datasource/VotesAPI';

export interface Context {
  req: Request;
  res: Response;
  dataSources: {
    breedsAPI: BreedsAPI;
    imagesAPI: ImagesAPI;
    votesAPI: VotesAPI;
  };
}

export enum Order {
  RANDOM = 'RANDOM',
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum VoteType {
  UP = 1,
  DOWN = 0,
}
