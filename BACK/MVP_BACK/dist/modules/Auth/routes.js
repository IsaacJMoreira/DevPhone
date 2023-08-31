"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
const login_1 = __importDefault(require("../../infra/middlewares/login"));
//TODO: IMPORT MIDDLEWARES
const authRoutes = (0, express_1.Router)();
authRoutes.get('/login', login_1.default.login, controller_1.default.login);
exports.default = authRoutes;
