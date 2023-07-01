import mongoose, { Document } from 'mongoose';
export interface IZhidao extends Document {
    img: string;
    title: string;
    author: string;
}
declare const _default: mongoose.Model<IZhidao, {}, {}>;
export default _default;
