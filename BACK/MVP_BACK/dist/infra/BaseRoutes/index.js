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
const express_1 = require("express");
const models_1 = require("../../models");
const routes = (0, express_1.Router)();
routes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield models_1.User.create({
            name: "Isaac",
            email: 'isaac@email.com',
            password: "42069"
        });
        yield models_1.Product.create({
            name: "Vibrador",
            SKU: "7896001283008",
            dimensions: {
                height: 8,
                width: 8,
                length: 30,
            },
            weight: {
                weight: 10,
                dimension: "Kg",
            },
            category: [
                {
                    code: "V-COLOR",
                    name: "Black",
                },
                {
                    code: "SIZE",
                    name: "Giant",
                }
            ],
        });
        yield models_1.ShoppingCart.create({
            items: [
                {
                    itemID: "any1",
                    itemSKU: "any1",
                    quantity: 69420
                },
                {
                    itemID: "any2",
                    itemSKU: "any1",
                    quantity: 6942011
                }
            ],
            ownerID: "Isaac"
        });
        yield models_1.Categorie.create({
            code: "V-COLOR",
            name: "Black",
        });
        yield models_1.Order.create({
            items: [
                {
                    itemID: "any1",
                    itemSKU: "any1",
                    quantity: 69420
                },
                {
                    itemID: "any2",
                    itemSKU: "any1",
                    quantity: 6942011
                }
            ],
            ownerID: "24",
            shippingCode: "Correios",
        });
        return res.json("OK!!!");
    }
    catch (error) {
        console.log("falhou!", error);
    }
    ;
}));
routes.get('/teste', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Deu bom!");
    return res.json("UMENO ISSO PRESTA!");
}));
exports.default = routes;
