import { assertIsDefined } from '../helper/assert';

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

assertIsDefined(MONGODB_URI, 'MONGODB_URI');
assertIsDefined(MONGODB_DB, 'MONGODB_DB');

export default {
  MONGODB_URI,
  MONGODB_DB,
};
