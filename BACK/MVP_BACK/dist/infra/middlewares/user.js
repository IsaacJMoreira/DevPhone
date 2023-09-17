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
const validatePost = validate({
    body: Joi.object().keys({
        name: Joi.string().min(2).max(30).required(),
        email: Joi.string().email().required(),
        mainPhone: Joi.string().min(8).max(14),
        password: Joi.string().min(8).max(30).required(),
        credential: Joi.string().valid("ADM", "CLI", "INACTIVE"),
        address: Joi.array().items(Joi.object({
            nikName: Joi.string().min(3).max(30),
            street: Joi.string().min(1).max(30),
            number: Joi.string().min(1).max(30),
            zipCode: Joi.string().min(1).max(30),
            neighborhood: Joi.string().min(1).max(30),
            city: Joi.string().min(1).max(30),
            state: Joi.string().min(1).max(30),
            country: Joi.string().min(1).max(30),
        })),
    })
});
const validateUpdate = validate({
    body: Joi.object().keys({
        name: Joi.string().min(2).max(30),
        email: Joi.string().email(),
        mainPhone: Joi.string().min(8).max(14),
        password: Joi.string().min(8).max(30),
        credential: Joi.string().valid("ADM", "CLI", "INACTIVE"),
        address: Joi.object({
            nikName: Joi.string().min(3).max(30),
            street: Joi.string().min(1).max(30),
            number: Joi.string().min(1).max(30),
            zipCode: Joi.string().min(1).max(30),
            neighborhood: Joi.string().min(1).max(30),
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
exports.default = middlewareUser;
