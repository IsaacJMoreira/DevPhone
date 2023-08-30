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
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
const errors = require("../errors");
const isTest = true; //ATTENTION!!!! REMOVE!
const productControllers = {
    create: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { dimensions, weight, name, SKU, category, stock, price, imgURL, description, shortDescription, alt } = request.body;
        //NEEDS TO RECEIVE E img FROM THE REQUEST
        //USE THE FACTORY TO DEAL WITH THE IMAGE EXTENSIONS
        try {
            const DBResponse = yield models_1.Product.create({
                dimensions,
                weight,
                name,
                SKU,
                category,
                stock,
                price,
                imgURL,
                description,
                shortDescription,
                alt
            });
            //IDEALY, WE WILL DEAL WITH THE IMAGES HERE
            if (isTest)
                console.log(DBResponse);
            return response.header("Access-Control-Allow-Origin", "*").sendStatus(200);
        }
        catch (error) {
            if (isTest)
                console.log(error);
            return response.header("Access-Control-Allow-Origin", "*").status(500).json(errors.internal_server_error);
        }
    }),
    findOne: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = request.params;
        try {
            const DBResponse = yield models_1.Product.findById(id);
            if (!DBResponse)
                return response.status(404).header("Access-Control-Allow-Origin", "*").json(errors.not_found);
            return response.header("Access-Control-Allow-Origin", "*").status(200).json(DBResponse);
        }
        catch (error) {
            if (isTest)
                console.log(error);
            response.header("Access-Control-Allow-Origin", "*").status(500).json(errors.internal_server_error);
        }
    }),
    findByCategory: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { category } = request.params;
        try {
            const DBResponse = yield models_1.Product.find({ "category.name": category });
            if (!DBResponse.length)
                return response.status(404).header("Access-Control-Allow-Origin", "*").json(errors.not_found);
            return response.header("Access-Control-Allow-Origin", "*").status(200).json(DBResponse);
        }
        catch (error) {
            if (isTest)
                console.log(error);
            return response.header("Access-Control-Allow-Origin", "*").status(500).json(errors.internal_server_error);
        }
    }),
    findByName: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { name } = request.params;
        try {
            const DBResponse = yield models_1.Product.find({ name: name });
            if (!DBResponse.length)
                return response.status(404).header("Access-Control-Allow-Origin", "*").json(errors.not_found);
            return response.header("Access-Control-Allow-Origin", "*").status(200).json(DBResponse);
        }
        catch (error) {
            if (isTest)
                console.log(error);
            return response.header("Access-Control-Allow-Origin", "*").status(500).json(errors.internal_server_error);
        }
    }),
    findAll: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const DBResponse = yield models_1.Product.find();
            if (isTest)
                console.log("Alguém tá tentando acessar!");
            if (!DBResponse.length)
                return response.header("Access-Control-Allow-Origin", "*").status(404).json(errors.not_found);
            return response.header("Access-Control-Allow-Origin", "*").status(200).json(DBResponse);
        }
        catch (error) {
            if (isTest)
                console.log(error);
            response.header("Access-Control-Allow-Origin", "*").status(500).json(errors.internal_server_error);
        }
    }),
    update: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = request.params;
        const { name, SKU, dimensions, weight, category, stock } = request.body;
        try {
            const DBResponse = yield models_1.Product.updateOne({
                _id: id
            }, {
                $set: {
                    name,
                    SKU,
                    dimensions,
                    weight,
                    category,
                    stock
                }
            });
            return response.header("Access-Control-Allow-Origin", "*").status(204).json(DBResponse);
        }
        catch (error) {
            if (isTest)
                console.log(error);
            response.header("Access-Control-Allow-Origin", "*").status(500).json(errors.internal_server_error);
        }
    }),
    delete: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = request.params;
        try {
            const DBResponse = yield models_1.Product.findByIdAndDelete(id);
            return response.header("Access-Control-Allow-Origin", "*").status(204);
        }
        catch (error) {
            if (isTest)
                console.log(error);
            response.header("Access-Control-Allow-Origin", "*").status(500).json(errors.internal_server_error);
        }
    }),
};
exports.default = productControllers;
