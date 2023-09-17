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
const category = validate({
    body: Joi.object().keys({
        code: Joi.string().min(3).max(30).required(),
        name: Joi.string().min(3).max(30).required(),
        fatherCategory: Joi.string().min(1).max(30),
    }).required()
});
const validateCreate = validate({
    body: Joi.object().keys({
        code: Joi.string().min(3).max(30).required(),
        name: Joi.string().min(3).max(30).required(),
        fatherCategory: Joi.string().min(1).max(30),
    })
});
const validateUp = ({
    body: Joi.object().keys({
        code: Joi.string().optional(),
        nome: Joi.strig().min(3).max(30).required(),
        fatherCategory: Joi.string().min(1).max(30),
    })
});
const middlewareCat = {
    findallCategorie: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        yield category(req, res, next);
    }),
    createCategorie: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        yield validateCreate(req, res, next);
    }),
    updateCategorie: (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        yield validateUp(req, res, next);
    })
};
exports.default = middlewareCat;
