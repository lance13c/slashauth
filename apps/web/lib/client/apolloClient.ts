import { ApolloClient, InMemoryCache } from '@apollo/client';
import clientEnvs from './clientEnvs';

const client = new ApolloClient({
  uri: clientEnvs.MONGODB_URI,
  cache: new InMemoryCache(),
});

export default client;
