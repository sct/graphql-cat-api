import * as express from 'express';
import { ApolloServer } from 'apollo-server-express';
import * as cors from 'cors';
import { typeDefs } from './typeDefs';
import resolvers from './resolvers';
import BreedsAPI from './datasource/BreedsAPI';
import { makeExecutableSchema } from 'graphql-tools';
import CatAPI from './datasource/CatAPI';
import logger from './logger';
import ImagesAPI from './datasource/ImagesAPI';

const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();

app.use(cors());

const server = new ApolloServer({
  schema,
  dataSources: (): { [key: string]: CatAPI } => ({
    breedsAPI: new BreedsAPI(),
    imagesAPI: new ImagesAPI(),
  }),
  tracing: true,
  playground: {
    settings: {
      'request.credentials': 'same-origin',
    },
  },
  formatError: (error: Error): Error => {
    logger.error('An error occured', error);
    return error;
  },
});

server.applyMiddleware({ app, path: '/' });

app.listen({ port: 4000 }, (): void => {
  logger.info(`Running GQL @ http://localhost:4000${server.graphqlPath}`);
});
