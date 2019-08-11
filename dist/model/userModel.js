"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
exports.userSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: String,
    password: String,
    active: Boolean,
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now }
});
exports.userModel = mongoose_1.default.model('user', exports.userSchema); //collection name and schema of collection which returns reference of table
