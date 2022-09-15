import { ApolloClient, InMemoryCache } from '@apollo/client';

const GRAPHQL_URI = '/api/graphql';

const client = new ApolloClient({
  uri: GRAPHQL_URI,
  cache: new InMemoryCache(),
});

export default client;
