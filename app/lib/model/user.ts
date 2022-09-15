import { composeMongoose } from 'graphql-compose-mongoose';
import mongoose from 'mongoose';
export interface User {
  avatarUrl: string;
  name: string;
}

export interface UserDocument extends User, mongoose.Document {}

const { Schema } = mongoose;
let UserModel: mongoose.Model<UserDocument, {}, {}, {}, any> | undefined;

const UserScheme = new Schema({
  avatarUrl: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
  },
});

export const userScheme = UserScheme;

console.log('after user scheme init');

// Avoids redeclaring the same Model
// TODO: Find better solution
if (!UserModel) {
  UserModel = mongoose.model<UserDocument>('User', userScheme);
}
const CUSTOM_OPTIONS = {};

console.log('after user model initialization');

// Coverts Mongoose Scheme to GraphQL
export default composeMongoose(UserModel, CUSTOM_OPTIONS);
