"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
//TODO: IMPORT MIDDLEWARES
const orderRoutes = (0, express_1.Router)();
orderRoutes.post('/order/:ownerID', controller_1.default.create);
orderRoutes.get('/orders', controller_1.default.findAll);
orderRoutes.get('/orders/:ownerID', controller_1.default.findByOwnerId);
orderRoutes.put('/order/:ownerID', controller_1.default.update);
exports.default = orderRoutes;
