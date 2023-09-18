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
const isTest = false; //ATTENTION!!!! REMOVE!
const orderControllers = {
    create: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { ownerID, items, addressNickName } = request.body;
        //WE TEST IF ANY ITEM IS EITHER LOW IN STOCK OR MISSING COMPLETELY
        try {
            const userExistes = yield models_1.User.findById({ _id: ownerID }).count();
            console.log(userExistes);
            if (!userExistes)
                return response.status(400).json(errors_1.default.bad_request);
            if (!items)
                return response.status(400).json(errors_1.default.bad_request);
            // for(let i = 0; i < items.length; i++){//
            //     const id = items[i].itemID;
            //     const decrement = items[i].quantity;
            //     const DBStockResponse = await Product.findById({_id: id});
            //     if(!DBStockResponse)  lowStockFlag++;
            //     else if( (DBStockResponse.stock < decrement) || (!DBStockResponse.enabled) ) lowStockFlag++;
            // }
            const products = yield models_1.Product.find({
                _id: {
                    $in: items.map((item) => item.itemID) //type later ⚠ 
                }
            });
            if (products.some((product) => product.stock <= 0))
                return response.status(412).json("One or more products out of stock."); // errors
            //WE NEED TO TREAD LIGHTLY HERE. Any mistake means we fucked up opdating the new stock to the bank
            // let updateFlag: number = 0;//🚩 
            // for(let i = 0; i < items.length; i++){
            //     const id = items[i].itemID;
            //     const decrement = items[i].quantity;
            //     const DBUpdateResponse = await Product.updateOne({
            //         _id: id
            //     },{
            //         $inc:{ stock: -decrement}
            //     });
            //     if(!DBUpdateResponse) updateFlag++;
            // }
            yield Promise.all(products.map((product) => {
                const { quantity } = items.find((item) => item.itemID == product._id.toString());
                return models_1.Product.updateOne({
                    _id: product._id
                }, {
                    $inc: { stock: -quantity }
                });
            }));
            const DBResponse = yield models_1.Order.create({
                ownerID: ownerID.toString(),
                items: items,
                addressNickName: addressNickName
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
        const { id } = request.params;
        const { items, shippingCode, status } = request.body;
        try {
            const DBResponse = yield models_1.Order.updateOne({
                _id: id
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
