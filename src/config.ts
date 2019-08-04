import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const config = {
  apiKey: process.env.CAT_API_KEY,
};

export default config;
