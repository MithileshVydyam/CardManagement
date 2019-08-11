"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
exports.bankSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: true },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now },
    active: Boolean
});
exports.bankModel = mongoose_1.default.model('bank', exports.bankSchema); //collection name and schema of collection
