"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRepository = void 0;
const models_1 = require("../../../models");
const productRepository_1 = __importDefault(require("./productRepository"));
exports.productRepository = new productRepository_1.default(models_1.Product);
