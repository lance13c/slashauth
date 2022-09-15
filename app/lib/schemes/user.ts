import mongoose from 'mongoose';
export interface User {
  avatarUrl?: string;
  name: string;
}

export interface UserDocument extends User, mongoose.Document {}

const { Schema } = mongoose;

export const userScheme = new Schema({
  avatarUrl: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
  },
});
