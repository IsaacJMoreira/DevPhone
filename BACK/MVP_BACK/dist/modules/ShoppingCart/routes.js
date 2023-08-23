"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
//TODO: IMPORT MIDDLEWARES
const shoppingCartRoutes = (0, express_1.Router)();
shoppingCartRoutes.post('/shoppingcart/:ownerID', controller_1.default.create);
shoppingCartRoutes.get('/adm/shoppingcarts', controller_1.default.findAll);
shoppingCartRoutes.get('/shoppingcart/:ownerID', controller_1.default.findOne);
shoppingCartRoutes.put('/shoppingcart/:ownerID', controller_1.default.update);
exports.default = shoppingCartRoutes;
