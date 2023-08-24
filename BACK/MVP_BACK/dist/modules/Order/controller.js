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
const models_1 = require("../../models");
const errors = require("../errors");
const isTest = true; //ATTENTION!!!! REMOVE!
const orderControllers = {
    create: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { ownerID } = request.params;
        const { items } = request.body;
        try {
            const DBResponse = yield models_1.Order.create({
                ownerID: ownerID.toString(),
                items: items
            });
            if (isTest)
                console.log(DBResponse);
            return response.sendStatus(200);
        }
        catch (error) {
            if (isTest)
                console.log(error);
            return response.status(500).json(errors.internal_server_error);
        }
    }),
    findByOwnerId: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { ownerID } = request.params;
        try {
            const DBResponse = yield models_1.Order.find({
                ownerID: ownerID
            });
            if (!DBResponse.length)
                return response.status(404).json(errors.not_found);
            return response.status(200).json(DBResponse);
        }
        catch (error) {
            if (isTest)
                console.log(error);
            response.status(500).json(errors.internal_server_error);
        }
    }),
    findAll: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const DBResponse = yield models_1.Order.find();
            if (!DBResponse.length)
                return response.status(404).json(errors.not_found);
            return response.status(200).json(DBResponse);
        }
        catch (error) {
            if (isTest)
                console.log(error);
            response.status(500).json(errors.internal_server_error);
        }
    }),
    update: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { ownerID } = request.params;
        const { items, shippingCode, status } = request.body;
        try {
            const DBResponse = yield models_1.Order.updateOne({
                ownerID: ownerID
            }, {
                items,
                shippingCode,
                status
            });
            return response.status(204).json(DBResponse);
        }
        catch (error) {
            if (isTest)
                console.log(error);
            response.status(500).json(errors.internal_server_error);
        }
    }),
};
exports.default = orderControllers;
