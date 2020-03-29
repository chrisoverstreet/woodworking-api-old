import { gql } from 'apollo-server-express';

export default gql`
  type Query {
    _empty: String # required dummy field; Query can't be empty
  }
`;
