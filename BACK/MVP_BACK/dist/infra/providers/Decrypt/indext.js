"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_jwt_1 = require("express-jwt");
const secret_1 = __importDefault(require("../../config/secret"));
const algo = 'HS256';
const decryptProvider = (0, express_jwt_1.expressjwt)({
    secret: secret_1.default.key,
    algorithms: [algo],
    //credentialsRequired: false //maybe this is the enswer?
});
exports.default = decryptProvider;
