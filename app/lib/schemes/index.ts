import { schemaComposer } from 'graphql-compose';
import { composeMongoose } from 'graphql-compose-mongoose';
import mongoose from 'mongoose';
import { TicketDocument, ticketScheme } from './ticket';
import { UserDocument, userScheme } from './user';

const CUSTOM_OPTIONS = {};

// Ticket
const TicketModel = mongoose.models?.Ticket || mongoose.model<TicketDocument>('Ticket', ticketScheme);
// Coverts Mongoose Scheme to GraphQL
if (!schemaComposer.has('Ticket')) {
  const TicketComposed = composeMongoose(TicketModel, { schemaComposer });
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

// User
const UserModel = mongoose.models?.User || mongoose.model<UserDocument>('User', userScheme);
if (!schemaComposer.has('User')) {
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
}

export const graphQLScheme = schemaComposer.buildSchema();