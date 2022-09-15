import mongoose from 'mongoose';
import { User, userScheme } from './user';

const { Schema } = mongoose;
export type StatusType = 'BACKLOG' | 'IN_PROGRESS' | 'COMPLETED' | 'BLOCKED';
export const STATUS_TYPES = ['BACKLOG', 'IN_PROGRESS', 'COMPLETED', 'BLOCKED'];

// TODO: find better name than TicketProps
export interface TicketProps {
  title: string;
  description: string;
  status: StatusType;
  assignee: User;
}

export interface MongooseTicket extends TicketProps {
  _id: string;
  _v: number;
}

export interface TicketDocument extends TicketProps, mongoose.Document {}

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
    enum: STATUS_TYPES,
    trim: true,
  },
  assignee: {
    type: [userScheme],
  },
});
