import mongoose from 'mongoose';

const { Schema } = mongoose;

const userScheme = new Schema({
  id: Schema.Types.ObjectId,
  avatarUrl: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
  },
});

const UserScheme = mongoose.model('User', userScheme);
module.exports = { UserScheme };
