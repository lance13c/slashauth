import { STATUS_TYPES } from '@lib/helper/constants';
import mongoose from 'mongoose';
import { StatusType } from 'types';
import { User } from './user';

const { Schema } = mongoose;

// TODO: find better name than TicketProps
export interface TicketProps {
  title: string;
  description: string;
  status: StatusType;
  assigneeId: string;
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
  assigneeId: { type: Schema.Types.ObjectId, ref: 'User' },
});
