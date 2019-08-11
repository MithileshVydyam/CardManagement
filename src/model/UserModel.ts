import mongoose from "mongoose";


export const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: String,
  password: String,
  active: Boolean,
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now }
});

export const userModel = mongoose.model('user', userSchema);//collection name and schema of collection which returns reference of table
