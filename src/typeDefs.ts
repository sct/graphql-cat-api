import { gql } from 'apollo-server-core';

export const typeDefs = gql`
  type Image {
    id: String
    url: String
    breeds: [Breed!]!
  }

  type Breed {
    id: ID!
    name: String!
    temperament: String!
    lifeSpan: String!
    altNames: String
    wikipediaUrl: String
    origin: String!
    hairless: Boolean!
    natural: Boolean!
    rare: Boolean!
    images(limit: Int = 5, order: Order = RANDOM): [Image!]!
  }

  type Query {
    breeds(attachBreed: Int = 0, page: Int = 1, limit: Int = 20): [Breed!]!
    searchBreeds(query: String): [Breed!]!
    images(page: Int = 1, limit: Int = 20, order: Order = RANDOM): [Image!]!
  }

  enum Order {
    RANDOM
    ASC
    DESC
  }
`;
