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
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(30).required(),
        credential: Joi.string().valid("ADM", "CLI", "INACTIVE"),
        address: Joi.object({
            nikName: Joi.string().min(3).max(30).required(),
            street: Joi.string().min(1).max(30).required(),
            number: Joi.string().min(1).max(30).required(),
            zipCode: Joi.string().min(1).max(30).required(),
            neighgorhood: Joi.string().min(1).max(30).required(),
            city: Joi.string().min(1).max(30).required(),
            state: Joi.string().min(1).max(30).required(),
            country: Joi.string().min(1).max(30).required(),
        }).required(),
    })
});
const validateUpdate = validate({
    body: Joi.object().keys({
        name: Joi.string(),
        email: Joi.string().email(),
        password: Joi.string().min(8).max(30),
        credential: Joi.string().valid("ADM", "CLI", "INACTIVE"),
        address: Joi.object({
            nikName: Joi.string().min(3).max(30),
            street: Joi.string().min(1).max(30),
            number: Joi.string().min(1).max(30),
            zipCode: Joi.string().min(1).max(30),
            neighgorhood: Joi.string().min(1).max(30),
            city: Joi.string().min(1).max(30),
            state: Joi.string().min(1).max(30),
            country: Joi.string().min(1).max(30),
        }),
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
