import { schemaComposer } from 'graphql-compose';
import { TicketComposed } from './ticket';
import UserComposed from './user';

// Ticket
schemaComposer.Query.addFields({
  ticketOne: TicketComposed.mongooseResolvers.findOne(),
  ticketMany: TicketComposed.mongooseResolvers.findMany(),
  ticketCount: TicketComposed.mongooseResolvers.count(),
});

schemaComposer.Mutation.addFields({
  ticketCreateOne: TicketComposed.mongooseResolvers.createOne(),
  ticketUpdateOne: TicketComposed.mongooseResolvers.updateOne(),
  ticketUpdateMany: TicketComposed.mongooseResolvers.updateMany(),
  ticketRemoveOne: TicketComposed.mongooseResolvers.removeOne(),
});

// User
schemaComposer.Query.addFields({
  userOne: UserComposed.mongooseResolvers.findOne(),
  userMany: UserComposed.mongooseResolvers.findMany(),
  userCount: UserComposed.mongooseResolvers.count(),
});

schemaComposer.Mutation.addFields({
  userCreateOne: UserComposed.mongooseResolvers.createOne(),
  userUpdateOne: UserComposed.mongooseResolvers.updateOne(),
  userUpdateMany: UserComposed.mongooseResolvers.updateMany(),
  userRemoveOne: UserComposed.mongooseResolvers.removeOne(),
});

export const graphQLScheme = schemaComposer.buildSchema();
