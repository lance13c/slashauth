import mongoose from 'mongoose';

const { Schema } = mongoose;

const ticketScheme = new Schema({
  id: Schema.Types.ObjectId,
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
    type: { type: Schema.Types.ObjectId, ref: 'User' },
    trim: true,
  },
});

const Ticket = mongoose.model('Ticket', ticketScheme);
module.exports = { Ticket };
