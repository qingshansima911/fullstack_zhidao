import { Document } from 'mongoose';
export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}
declare const User: import("mongoose").Model<IUser, {}, {}>;
export default User;
