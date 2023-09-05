"use strict";
/*****************************************
 *        🤓 ISAAC ESTEVE AQUI 🤓       *
 *****************************************/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
const errors_1 = __importDefault(require("../errors"));
const isTest = true; //ATTENTION!!!! REMOVE!
const orderControllers = {
    create: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { ownerID, items } = request.body;
        let lowStockFlag = 0; //🚩 
        //WE TEST IF ANY ITEM IS EITHER LOW IN STOCK OR MISSING COMPLETELY
        try {
            if (!items)
                return response.status(400).json(errors_1.default.bad_request);
            for (let i = 0; i < items.length; i++) {
                const id = items[i].itemID;
                const decrement = items[i].quantity;
                const DBStockResponse = yield models_1.Product.findById({ _id: id });
                if (!DBStockResponse)
                    lowStockFlag++;
                else if ((DBStockResponse.stock < decrement) || (!DBStockResponse.enabled))
                    lowStockFlag++;
            }
            console.log("flag stock:", lowStockFlag);
            if (lowStockFlag)
                return response.status(400).json(errors_1.default.bad_request);
            //WE NEED TO TREAD LIGHTLY HERE. Any mistake means we fucked up opdating the new stock to the bank
            let updateFlag = 0; //🚩 
            for (let i = 0; i < items.length; i++) {
                const id = items[i].itemID;
                const decrement = items[i].quantity;
                const DBUpdateResponse = yield models_1.Product.updateOne({
                    _id: id
                }, {
                    $inc: { stock: -decrement }
                });
                if (!DBUpdateResponse)
                    updateFlag++;
            }
            console.log("flag update:", updateFlag);
            if (updateFlag)
                throw new Error(`ERROR: ${new Date()} - Error updating stock while placing order.`);
        }
        catch (error) {
            if (isTest)
                console.log(error);
            return response.status(500).json(errors_1.default.internal_server_error);
        }
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
            return response.status(500).json(errors_1.default.internal_server_error);
        }
    }),
    findByOwnerId: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { ownerID } = request.params;
        try {
            const DBResponse = yield models_1.Order.find({
                ownerID: ownerID
            });
            if (!DBResponse.length)
                return response.status(404).json(errors_1.default.not_found);
            return response.status(200).json(DBResponse);
        }
        catch (error) {
            if (isTest)
                console.log(error);
            response.status(500).json(errors_1.default.internal_server_error);
        }
    }),
    findAll: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const DBResponse = yield models_1.Order.find();
            if (!DBResponse.length)
                return response.status(404).json(errors_1.default.not_found);
            return response.status(200).json(DBResponse);
        }
        catch (error) {
            if (isTest)
                console.log(error);
            response.status(500).json(errors_1.default.internal_server_error);
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
            response.status(500).json(errors_1.default.internal_server_error);
        }
    }),
};
exports.default = orderControllers;
