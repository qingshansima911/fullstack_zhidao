import { Schema, Document, model } from 'mongoose';

export interface IUser extends Document {
  name: string;
  avatar: string;
  password: string;
  foot: number;
  answer: number;
  note: number;
  collect: number;
  draft: number;
}


const userSchema: Schema<IUser> = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    default: ""
  },
  foot: {
    type: Number,
    default: 0
  },
  answer: {
    type: Number,
    default: 0
  },
  note: {
    type: Number,
    default: 0
  },
  collect: {
    type: Number,
    default: 0
  },
  draft: {
    type: Number,
    default: 0
  },
});

const User = model<IUser>('User', userSchema);

export default User;