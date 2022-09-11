import { createServer } from '@graphql-yoga/node';
import { connectToDatabase } from '../../lib/server/connectToMongoDB';

const typeDefs = /* GraphQL */ `
  type Query {
    users: [User!]!
  }
  type User {
    name: String
  }
`;

const resolvers = {
  Query: {
    users() {
      return [{ name: 'Nextjs' }];
    },
  },
};

connectToDatabase();

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
  endpoint: '/api/graphql',
  // graphiql: false // uncomment to disable GraphiQL
});

export default server;
