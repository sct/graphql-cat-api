import { ImageModel } from './image';

export interface VoteModel {
  id: string;
  image?: ImageModel;
  subId: string;
  createdAt: string;
  countryCode: string;
  value: number;
}
