import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-micro';
import { NextApiRequest, NextApiResponse } from 'next';
import { graphQLScheme } from '../../lib/schemes';
import { connectToDatabase } from '../../lib/server/connectToMongoDB';

const server = new ApolloServer({
  schema: graphQLScheme,
  csrfPrevention: true,
  cache: 'bounded',
  // Change this to be dependent on env
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

const startServer = server.start();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Connects to mongodb via mongoose
  await connectToDatabase();
  await startServer;

  res.setHeader('access-control-allow-methods', 'POST');
  res.setHeader('access-control-allow-origin', '*');

  await server.createHandler({
    path: '/api/graphql',
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
