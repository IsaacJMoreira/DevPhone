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
        name: Joi.string().min(4).max(30).required(),
        SKU: Joi.string().length(13).required(),
        dimensions: Joi.object().keys({
            height: Joi.number().required(),
            width: Joi.number().required(),
            length: Joi.number().required(),
            dimension: Joi.string().min(1).max(3),
        }).required(),
        category: Joi.array().items(Joi.object({
            code: Joi.string().min(3).max(30).required(),
            name: Joi.string().min(3).max(30).required(),
            fatherCategory: Joi.string().min(1).max(30),
        })).required(),
        weight: Joi.object({
            weight: Joi.number().min(1).required(),
            dimension: Joi.string().min(1).max(10),
        }).required(),
        stock: Joi.number().required(),
        price: Joi.number().required(),
        imgURL: Joi.string().min(5).max(2048).required(),
        description: Joi.string().min(10).max(2048).required(),
        shortDescription: Joi.string().min(30).max(140).required(),
        alt: Joi.string().min(3).max(30).required(),
        enabled: Joi.boolean(),
    })
});
const validateUpdate = validate({
    body: Joi.object().keys({
        name: Joi.string().min(4).max(30),
        SKU: Joi.string().length(13).required(),
        dimensions: Joi.object().keys({
            height: Joi.number(),
            width: Joi.number(),
            length: Joi.number(),
            dimension: Joi.string().min(1).max(3),
        }),
        category: Joi.object({
            code: Joi.string().min(3).max(30),
            name: Joi.string().min(3).max(30),
            fatherCategory: Joi.string().min(1).max(30),
        }),
        weight: Joi.object({
            weight: Joi.number().min(1),
            dimension: Joi.string().min(2).max(10),
        }),
        stock: Joi.number(),
        price: Joi.number(),
        imgURL: Joi.string().min(9).max(2048),
        description: Joi.string().min(10).max(2048),
        shortDescription: Joi.string().min(30).max(140),
        alt: Joi.string().min(3).max(30),
        enabled: Joi.boolean(),
    })
});
const middlewareProducts = {
    newProduct: (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
        yield validatePost(request, response, next);
    }),
    updateProduct: (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
        yield validateUpdate(request, response, next);
    })
};
exports.default = middlewareProducts;
