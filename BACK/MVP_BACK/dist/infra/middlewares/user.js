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
const { validate, Joi } = require("express-validation");
const validatePost = validate({
    body: Joi.object().keys({
        nome: Joi.string().required(),
        email: Joi.string().required(),
    })
});
const validateUpdate = validate({
    body: Joi.object().keys({
        nome: Joi.string().required(),
        email: Joi.string().required(),
        passaword: Joi.string().required()
    })
});
const middlewareUser = {
    newUser: (require, response, next) => __awaiter(void 0, void 0, void 0, function* () {
        yield validatePost(require, response, next);
    }),
    updateUser: (require, response, next) => __awaiter(void 0, void 0, void 0, function* () {
        yield validateUpdate(require, response, next);
    })
};
module.exports = middlewareUser;
