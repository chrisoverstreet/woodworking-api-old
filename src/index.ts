import dotentv from 'dotenv';
import express from 'express';

import routes from './routes';

dotentv.config();

const app = express();

app.use(routes);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 App started on port ${process.env.PORT}`);
});
