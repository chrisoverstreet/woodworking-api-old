import 'dotenv/config';
import express from 'express';

import routes from './routes';
import { connectDb } from './models';

const app = express();

(async () => {
  await connectDb();

  app.use(routes);

  app.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`🚀 App started on port ${process.env.PORT}`);
  });
})();
