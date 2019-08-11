import mongoose from "mongoose";

export const bankSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  active: Boolean
});

export const bankModel = mongoose.model('bank', bankSchema);//collection name and schema of collection
