import { composeMongoose } from 'graphql-compose-mongoose';
import mongoose from 'mongoose';

const { Schema } = mongoose;

export interface User {
  avatarUrl: string;
  name: string;
}

export interface UserDocument extends User, mongoose.Document {}

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

const UserModel = mongoose.model<UserDocument>('User', userScheme);
const CUSTOM_OPTIONS = {};

// Coverts Mongoose Scheme to GraphQL
export const UserComposed = composeMongoose(UserModel, CUSTOM_OPTIONS);
