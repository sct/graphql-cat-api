import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const config = {
  apiKey: process.env.CAT_API_KEY,
  subId: process.env.CAT_SUB_ID || 'gqlexample',
};

export default config;
