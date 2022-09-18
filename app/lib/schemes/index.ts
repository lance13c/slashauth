import { schemaComposer } from 'graphql-compose';
import { composeMongoose } from 'graphql-compose-mongoose';
import mongoose from 'mongoose';
import { TicketDocument, ticketScheme } from './ticket';
import { UserModel } from './user';

const CUSTOM_OPTIONS = {};

// Ticket
const TicketModel = mongoose.models?.Ticket || mongoose.model<TicketDocument>('Ticket', ticketScheme);

// User
if (!schemaComposer.has('User') && !schemaComposer.has('Ticket')) {
  const UserComposed = composeMongoose(UserModel, { schemaComposer });
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

  // Coverts Mongoose Scheme to GraphQL
  const TicketComposed = composeMongoose(TicketModel, { schemaComposer });
  TicketComposed.addRelation('assignee', {
    resolver: () => UserComposed.mongooseResolvers.findById(),
    prepareArgs: {
      // resolver `findById` has `_id` arg, let provide value to it
      _id: (source) => source.assigneeId,
    },
    projection: { 'ticket.assignee': 1 },
  });

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
}

export const graphQLScheme = schemaComposer.buildSchema();
