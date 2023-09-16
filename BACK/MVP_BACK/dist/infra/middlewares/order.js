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
const validateOrder = validate({
    body: Joi.object().keys({
        ownerID: Joi.string().required(),
        itens: Joi.string().required(),
        //orderName :Joi.string().min(3).max(20).required() "ideia para add no fluxo" 
    })
});
const validateCreate = validate({
    body: Joi.object().keys({
        ownerID: Joi.string().required(),
        itens: Joi.strig().required()
    })
});
const validateUpdate = validate({
    body: Joi.object().keys({
        ownerID: Joi.string().required(),
        itens: Joi.string().required()
    })
});
const middlewareOrder = {
    findall: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        yield validateOrder(req, res, next);
    }),
    create: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        yield validateCreate(req, res, next);
    }),
    update: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        yield validateUpdate(req, res, next);
    })
};
exports.default = middlewareOrder;
