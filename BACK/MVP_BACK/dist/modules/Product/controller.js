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
            return response.sendStatus(200);
        }
        catch (error) {
            if (isTest)
                console.log(error);
            return response.status(500).json(errors_1.default.internal_server_error);
        }
    }),
    imgUpload: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { file } = request;
        if (!(file === null || file === void 0 ? void 0 : file.destination))
            return response.status(400).json(errors_1.default.bad_request);
        return response.sendStatus(201);
    }),
    findOne: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = request.params;
        try {
            const DBResponse = yield models_1.Product.findById({ _id: id });
            if (!DBResponse)
                return response.status(404).json(errors_1.default.not_found);
            return response.status(200).json(DBResponse);
        }
        catch (error) {
            if (isTest)
                console.log(error);
            response.status(500).json(errors_1.default.internal_server_error);
        }
    }),
    //This can implement other search Items:
    // Symbol.find(
    //     {
    //       $or: [
    //         { 'symbol': { '$regex': input, '$options': 'i' } },
    //         { 'name': { '$regex': input, '$options': 'i' } }
    //       ]
    //     }
    //   ) 
    search: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const category = request.query.category;
        if (!category)
            return response.status(400).json(errors_1.default.bad_request);
        try {
            const DBResponse = yield models_1.Product.find({ 'category.name': category });
            if (!DBResponse.length)
                return response.status(404).json(errors_1.default.not_found);
            return response.status(200).json(DBResponse);
        }
        catch (error) {
            if (isTest)
                console.log(error);
            return response.status(500).json(errors_1.default.internal_server_error);
        }
    }),
    findAll: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const DBResponse = yield models_1.Product.find().count();
            if (isTest)
                console.log("Alguém tá tentando acessar!");
            if (!DBResponse)
                return response.status(404).json(errors_1.default.not_found);
            return response.status(200).json(DBResponse);
        }
        catch (error) {
            if (isTest)
                console.log(error);
            response.status(500).json(errors_1.default.internal_server_error);
        }
    }),
    paginate: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { page, perPage } = request.query;
        if (!(page && perPage))
            return response.status(400).json(errors_1.default.bad_request);
        try {
            const DBResponse = yield models_1.Product.find().limit(Number(perPage)).skip(Number(page) - 1).sort({ name: 'asc' });
            if (isTest)
                console.log("page :" + page, "perPage: " + perPage);
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
            return response.status(204).json(DBResponse);
        }
        catch (error) {
            if (isTest)
                console.log(error);
            response.status(500).json(errors_1.default.internal_server_error);
        }
    }),
};
exports.default = productControllers;
