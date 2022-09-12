import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-micro';
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

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  // Change this to be dependent on env
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

const startServer = server.start();

export default async function handler(req, res) {
  await connectToDatabase().then(({ client, db }) => {
    console.info('Database connected');
  });
  await startServer;
  await server.createHandler({
    path: '/api/graphql',
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
