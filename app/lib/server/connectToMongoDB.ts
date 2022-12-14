import mongoose from 'mongoose';
import { serverEnvs } from './serverEnvs';

let cachedConnection: mongoose.Connection | null = null;

export async function connectToDatabase() {
  // check the cached.
  if (cachedConnection) {
    // load from cache
    return cachedConnection;
  }

  try {
    mongoose.connect(
      serverEnvs.MONGODB_URI,
      {
        autoIndex: true,
        dbName: serverEnvs.MONGO_INITDB_DATABASE,
        auth: {
          password: serverEnvs.MONGO_INITDB_ROOT_PASSWORD,
          username: serverEnvs.MONGO_INITDB_ROOT_USERNAME,
        },
      },
      (error) => {
        if (error) {
          console.error(error);
        }
      }
    );
    console.info('mongodb database started');
    console.info('mongodbURI');
    console.info('dbName');
    cachedConnection = mongoose.connection;
    return mongoose.connection;
  } catch (err) {
    console.error(err);
  }
}
