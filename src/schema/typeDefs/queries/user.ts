import { gql } from 'apollo-server-express';

export interface UserArgs {
  identifier: string;
}

export default gql`
  extend type Query {
    user(
      """
      _id, googleUid, or email
      """
      identifier: ID!
    ): User
  }
`;
