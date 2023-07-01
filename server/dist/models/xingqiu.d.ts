import mongoose, { Document } from 'mongoose';
export interface IXingqiu extends Document {
    album: string;
    title: string;
    author: string;
}
declare const Xingqiu: mongoose.Model<IXingqiu, {}, {}>;
export default Xingqiu;
