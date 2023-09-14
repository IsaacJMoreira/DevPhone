"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const models_1 = require("../../../models");
const userRepository_1 = __importDefault(require("./userRepository"));
exports.userRepository = new userRepository_1.default(models_1.User);
