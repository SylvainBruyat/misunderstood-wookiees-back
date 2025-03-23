import mongoose, { Document, Schema } from 'mongoose';

interface ICounter extends Document {
  name: string;
  comp: string;
  strategyTips: string;
  noGo: string;
}

const counterSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    counterName: { type: String, required: true },
    comp: { type: String, required: true },
    strategyTips: { type: String, required: false },
    noGo: { type: String, required: false },
  },
  { timestamps: true }
);

export default mongoose.model<ICounter>('Counter', counterSchema);
