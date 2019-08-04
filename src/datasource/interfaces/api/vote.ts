export interface ApiVote {
  id: string;
  image_id: string;
  value: number;
  sub_id: string;
  created_at: string;
  country_code: string;
}

export interface ApiVoteResponse {
  id: string;
  message: string;
}
