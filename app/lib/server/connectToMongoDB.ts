import mongoose from 'mongoose';
import { serverEnvs } from './serverEnvs';

let cachedConnection: mongoose.Connection | null = null;

export async function connectToDatabase() {
  // check the cached.
  if (cachedConnection) {
    // load from cache
    return cachedConnection;
  }

  // // set the connection options
  // const opts = {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // };

  // Connect to cluster

  try {
    mongoose.connect(serverEnvs.MONGODB_URI, { autoIndex: true, dbName: serverEnvs.MONGODB_DB }, (error) => {
      if (error) {
        console.error(error);
      }
    });
    console.log('mongodb database started');
    console.info('mongodbURI');
    console.info('dbName');
    cachedConnection = mongoose.connection;
    return mongoose.connection;
  } catch (err) {
    console.error(err);
  }
}