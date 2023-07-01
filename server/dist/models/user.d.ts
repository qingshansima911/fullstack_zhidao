import { Document } from 'mongoose';
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
declare const User: import("mongoose").Model<IUser, {}, {}>;
export default User;
