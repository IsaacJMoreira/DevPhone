"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
const auth_1 = __importDefault(require("../../infra/middlewares/auth"));
const validadeCredential_1 = __importDefault(require("../../infra/middlewares/validadeCredential"));
//TODO: IMPORT MIDDLEWARES
const productRoutes = (0, express_1.Router)();
productRoutes.post('/newproduct', auth_1.default, validadeCredential_1.default.ADM, controller_1.default.create);
productRoutes.get('/allproducts', controller_1.default.findAll);
productRoutes.get('/product/:id', controller_1.default.findOne);
productRoutes.get('/products/search', controller_1.default.search);
productRoutes.put('/product/:id', auth_1.default, validadeCredential_1.default.ADM, controller_1.default.update);
exports.default = productRoutes;
