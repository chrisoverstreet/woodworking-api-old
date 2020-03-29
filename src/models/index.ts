import mongoose from 'mongoose';

import User from './user';

const { MONGODB_URI } = process.env;

export function connectDb() {
  if (!MONGODB_URI) {
    throw new Error('No MONGO_URI env variable set');
  }
  return mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

const models = { User };

export default models;
