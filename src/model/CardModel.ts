import mongoose, { Types } from "mongoose";

export const cardSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  type: { type: String },
  //bank: { type: Types.ObjectId, ref: 'bank' },
  //user: { type: Types.ObjectId, ref: 'user' }
});

export const cardModel = mongoose.model('card', cardSchema);//collection name and schema of collection