import { gql } from 'apollo-server-core';

export const typeDefs = gql`
  type Image {
    id: ID!
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

  type Vote {
    id: ID!
    subId: ID!
    value: Int!
    createdAt: String!
    countryCode: String
    image: Image!
  }

  type Query {
    breeds(attachBreed: Int = 0, page: Int = 1, limit: Int = 20): [Breed!]!
    searchBreeds(query: String): [Breed!]!
    images(page: Int = 1, limit: Int = 20, order: Order = RANDOM): [Image!]!
  }

  type Mutation {
    vote(imageId: ID!, type: VoteType!): Vote!
  }

  enum Order {
    RANDOM
    ASC
    DESC
  }

  enum VoteType {
    UP
    DOWN
  }
`;
