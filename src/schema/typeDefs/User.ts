import { gql } from 'apollo-server-express';

export default gql`
  type User {
    email: String!
    googleUid: String!
    name: String!
  }
`;
