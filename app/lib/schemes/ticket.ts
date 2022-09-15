import mongoose from 'mongoose';
import { User, userScheme } from './user';

const { Schema } = mongoose;

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

export const ticketScheme = new Schema({
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
