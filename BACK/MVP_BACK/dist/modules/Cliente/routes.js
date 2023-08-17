"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
const imgUpload_1 = __importDefault(require("../../infra/middlewares/imgUpload"));
const routes = (0, express_1.Router)();
routes.get("/", controller_1.default.start);
routes.post("/cadastro", imgUpload_1.default.single("avatar"), controller_1.default.createClient);
exports.default = routes;
