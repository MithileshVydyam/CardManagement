"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
exports.cardSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, unique: true },
    type: { type: String },
});
exports.cardModel = mongoose_1.default.model('card', exports.cardSchema); //collection name and schema of collection
