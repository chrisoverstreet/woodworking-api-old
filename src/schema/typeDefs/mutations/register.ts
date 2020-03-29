import { gql } from 'apollo-server-express';

export interface RegisterParams {
  email: string;
  googleUid: string;
  name: string;
}

export default gql`
  extend type Mutation {
    register(email: String!, googleUid: String!, name: String!): User!
  }
`;
