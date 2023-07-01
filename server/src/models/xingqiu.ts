import mongoose, { Document, Schema } from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

export interface IXingqiu extends Document {
  album: string;
  title: string;
  author: string;
}

const xingqiuSchema = new Schema<IXingqiu>({
  album: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: ObjectId, ref: 'User' },
});

const Xingqiu = mongoose.model<IXingqiu>('Xingqiu', xingqiuSchema);

export default Xingqiu;