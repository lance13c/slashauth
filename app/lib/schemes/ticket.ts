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
    required: true,
  },
  description: {
    type: String,
    trim: true,
    defaultValue: '',
  },
  status: {
    type: String,
    enum: STATUS_TYPES,
    trim: true,
    required: true,
  },
  assignee: {
    type: userScheme,
    required: true,
  },
});
