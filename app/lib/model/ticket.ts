import { composeMongoose } from 'graphql-compose-mongoose';
import mongoose from 'mongoose';
import { userScheme } from './user';

const { Schema } = mongoose;

export interface User {
  name: string;
  avatarUrl: string;
}

export interface Ticket {
  title: string;
  description: string;
  status: string;
  assignee: User;
}

export interface MongooseTicket extends Ticket {
  _id: string;
  _v: number;
}

export interface TicketDocument extends Ticket, mongoose.Document {}

const ticketScheme = new Schema({
  title: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ['BACKLOG', 'IN_PROGRESS', 'COMPLETED', 'BLOCKED'],
    trim: true,
  },
  assignee: {
    type: [userScheme],
  },
});

const TicketModel = mongoose.model<TicketDocument>('Ticket', ticketScheme);
const CUSTOM_OPTIONS = {};

// Coverts Mongoose Scheme to GraphQL
export const TicketComposed = composeMongoose(TicketModel, CUSTOM_OPTIONS);
