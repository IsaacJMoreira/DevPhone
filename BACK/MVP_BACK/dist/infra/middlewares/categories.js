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
        code: Joi.string().min(5).max(30).required(),
        name: Joi.string().min(5).max(30).required(),
        fatherCategory: Joi.string().min(3).max(30),
        enabled: Joi.boolean(),
    })
});
const validateUpdate = validate({
    body: Joi.object().keys({
        code: Joi.string().min(5).max(30),
        name: Joi.string().min(5).max(30),
        fatherCategory: Joi.string().min(3).max(30),
        enabled: Joi.boolean(),
    })
});
const middlewareCategories = {
    post: (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
        yield validatePost(request, response, next);
    }),
    update: (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
        yield validateUpdate(request, response, next);
    })
};
exports.default = middlewareCategories;
