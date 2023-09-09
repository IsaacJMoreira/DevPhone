"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { validate, Joi } = require("express-validation");
const validateLogin = validate({
    body: Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required(),
    })
});
const middlewareAuth = {
    login: (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
        yield validateLogin(request, response, next);
    }),
};
exports.default = middlewareAuth;
