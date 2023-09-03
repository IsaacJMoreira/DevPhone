"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
const auth_1 = __importDefault(require("../../infra/middlewares/auth"));
const validadeCredential_1 = __importDefault(require("../../infra/middlewares/validadeCredential"));
const imgUpload_1 = __importDefault(require("../../infra/middlewares/imgUpload"));
const productRoutes = (0, express_1.Router)();
productRoutes.post('/newproduct', auth_1.default, validadeCredential_1.default.ADM, 
//midleware for data validation
controller_1.default.create);
productRoutes.post('/uploadimg', auth_1.default, validadeCredential_1.default.ADM, 
//midleware for data validation
imgUpload_1.default.single('file'), //field name
controller_1.default.imgUpload);
productRoutes.get('/allproducts', controller_1.default.findAll);
productRoutes.get('/product/:id', controller_1.default.findOne);
productRoutes.get('/products/search', controller_1.default.search);
productRoutes.put('/product/:id', auth_1.default, validadeCredential_1.default.ADM, controller_1.default.update);
exports.default = productRoutes;
