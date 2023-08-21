"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoDB = void 0;
const MongoConnection_1 = __importDefault(require("./MongoConnection"));
const mongoDB = new MongoConnection_1.default('mongodb://0.0.0.0:27017/DevPhone');
exports.mongoDB = mongoDB;
