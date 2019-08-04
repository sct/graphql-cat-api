import CatAPI from './CatAPI';
import { VoteModel } from './interfaces/models/vote';
import { mapVote } from '../converters/vote';
import { VoteType } from '../interfaces/common';
import config from '../config';
import { ApiVoteResponse, ApiVote } from './interfaces/api/vote';

class VotesAPI extends CatAPI {
  public async vote({
    imageId,
    voteType,
  }: {
    imageId: string;
    voteType: VoteType;
  }): Promise<VoteModel> {
    const response: ApiVoteResponse = await this.post('/v1/votes', {
      image_id: imageId,
      sub_id: config.subId,
      value: voteType,
    });

    if (response && response.id) {
      const vote: ApiVote = await this.get(`/v1/votes/${response.id}`);
      return mapVote(vote);
    }

    return null;
  }
}

export default VotesAPI;
