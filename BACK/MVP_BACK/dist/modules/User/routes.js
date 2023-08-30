"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
//TODO: IMPORT MIDDLEWARES
const userRoutes = (0, express_1.Router)();
userRoutes.post('/logon', controller_1.default.create);
userRoutes.get('/allusers', controller_1.default.findAll);
userRoutes.get('/profile/:id', controller_1.default.findOne);
userRoutes.put('/profile/:id', controller_1.default.update);
exports.default = userRoutes;
