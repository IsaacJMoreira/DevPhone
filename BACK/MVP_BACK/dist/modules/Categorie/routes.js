"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
const auth_1 = __importDefault(require("../../infra/middlewares/auth"));
const validadeCredential_1 = __importDefault(require("../../infra/middlewares/validadeCredential"));
const categories_1 = __importDefault(require("../../infra/middlewares/categories"));
const categorieRoutes = (0, express_1.Router)();
categorieRoutes.get('/categories', controller_1.default.findAll);
categorieRoutes.get('/category/:name', controller_1.default.findOneByName);
categorieRoutes.put('/category/:name', auth_1.default, validadeCredential_1.default.ADM, categories_1.default.update, controller_1.default.update);
categorieRoutes.post('/category', auth_1.default, validadeCredential_1.default.ADM, categories_1.default.post, controller_1.default.create);
exports.default = categorieRoutes;
