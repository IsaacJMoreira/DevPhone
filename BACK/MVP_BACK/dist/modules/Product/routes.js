"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
const auth_1 = __importDefault(require("../../infra/middlewares/auth"));
//TODO: IMPORT MIDDLEWARES
const productRoutes = (0, express_1.Router)();
productRoutes.post('/adm/newproduct', auth_1.default, controller_1.default.create);
productRoutes.get('/product/allproducts', controller_1.default.findAll);
productRoutes.get('/product/:id', controller_1.default.findOne);
productRoutes.get('/product/category/:category', controller_1.default.findByCategory);
productRoutes.get('/product/name/:name', controller_1.default.findByName);
productRoutes.put('adm/product/:id', auth_1.default, controller_1.default.update);
productRoutes.delete('adm/product/:id', auth_1.default, controller_1.default.delete);
exports.default = productRoutes;
