import { VoteModel } from '../datasource/interfaces/models/vote';
import { ApiVote } from '../datasource/interfaces/api/vote';

export const mapVote = (vote: ApiVote): VoteModel => ({
  id: vote.id,
  value: vote.value,
  subId: vote.sub_id,
  createdAt: vote.created_at,
  countryCode: vote.country_code,
});
