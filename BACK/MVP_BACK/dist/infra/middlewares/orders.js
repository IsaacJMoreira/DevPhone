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
        ownerID: Joi.string().required(),
        address: Joi.object().keys({
            nikName: Joi.string().min(3).max(30).required(),
            street: Joi.string().min(1).max(30).required(),
            number: Joi.string().min(1).max(30).required(),
            zipCode: Joi.string().min(1).max(30).required(),
            neighborhood: Joi.string().min(1).max(30).required(),
            city: Joi.string().min(1).max(30).required(),
            state: Joi.string().min(1).max(30).required(),
            country: Joi.string().min(1).max(30).required(),
        }).required(),
        items: Joi.array().items(Joi.object({
            itemID: Joi.string().required(),
            itemSKU: Joi.string().required(),
            quantity: Joi.number().min(1).required(),
        })).required()
    })
});
const validateUpdate = validate({
    body: Joi.object().keys({
        address: Joi.object().keys({
            nikName: Joi.string().min(3).max(30),
            street: Joi.string().min(1).max(30),
            number: Joi.string().min(1).max(30),
            zipCode: Joi.string().min(1).max(30),
            neighborhood: Joi.string().min(1).max(30),
            city: Joi.string().min(1).max(30),
            state: Joi.string().min(1).max(30),
            country: Joi.string().min(1).max(30),
        }),
        shippingCode: Joi.string().min(3).max(256),
        enabled: Joi.boolean(),
        status: Joi.string().min(5).max(256),
    })
});
const middlewareOrder = {
    create: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        yield validatePost(req, res, next);
    }),
    update: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        yield validateUpdate(req, res, next);
    })
};
exports.default = middlewareOrder;
