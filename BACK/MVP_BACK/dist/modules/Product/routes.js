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
const products_1 = __importDefault(require("../../infra/middlewares/products"));
const productRoutes = (0, express_1.Router)();
productRoutes.post('/newproduct', auth_1.default, validadeCredential_1.default.ADM, products_1.default.newProduct, controller_1.default.create);
productRoutes.post('/uploadimg/:filename', auth_1.default, validadeCredential_1.default.ADM, imgUpload_1.default.single('file'), //field name
controller_1.default.imgUpload);
productRoutes.get('/products/', controller_1.default.paginate);
productRoutes.get('/product/:id', controller_1.default.findOne);
productRoutes.put('/product/:id', auth_1.default, validadeCredential_1.default.ADM, products_1.default.updateProduct, controller_1.default.update);
exports.default = productRoutes;
