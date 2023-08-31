"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
const user_1 = __importDefault(require("../../infra/middlewares/user"));
const auth_1 = __importDefault(require("../../infra/middlewares/auth"));
//TODO: IMPORT MIDDLEWARES
const userRoutes = (0, express_1.Router)();
userRoutes.post('/logon', user_1.default.newUser, controller_1.default.create);
userRoutes.get('/allusers', auth_1.default, controller_1.default.findAll);
userRoutes.get('/profile/:id', auth_1.default, controller_1.default.findOne);
userRoutes.put('/profile/:id', auth_1.default, user_1.default.updateUser, controller_1.default.update);
exports.default = userRoutes;
