import 'dotenv/config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import routes from './routes';
import { connectDb } from './models';
import resolvers from './schema/resolvers';
import typeDefs from './schema/typeDefs';

const app = express();

(async (): Promise<void> => {
  await connectDb();

  const server = new ApolloServer({ typeDefs, resolvers });
  server.applyMiddleware({ app });

  app.use(routes);

  app.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`🚀 App started on port ${process.env.PORT}`);
  });
})();
