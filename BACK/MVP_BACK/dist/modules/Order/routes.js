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
const orderRoutes = (0, express_1.Router)();
orderRoutes.post('/order/', auth_1.default, validadeCredential_1.default.CLI, controller_1.default.create);
orderRoutes.get('/orders', auth_1.default, validadeCredential_1.default.ADM, controller_1.default.findAll);
orderRoutes.get('/orders/:ownerID', auth_1.default, validadeCredential_1.default.CLI, controller_1.default.findByOwnerId);
orderRoutes.put('/order/:ownerID', auth_1.default, validadeCredential_1.default.ADM, controller_1.default.update);
exports.default = orderRoutes;
