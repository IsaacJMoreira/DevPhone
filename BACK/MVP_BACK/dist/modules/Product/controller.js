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
const path_1 = __importDefault(require("path"));
const isTest = false; //ATTENTION!!!! REMOVE!
const productControllers = {
    create: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { dimensions, weight, name, SKU, category, stock, price, imgURL, description, shortDescription, alt, } = request.body;
        const categoryIsPresent = yield models_1.Categorie.find({
            code: {
                $in: category.map((category) => category.code), //type later ⚠
            },
        });
        console.log(categoryIsPresent);
        if (categoryIsPresent.length <= 0)
            return response.status(412).json("One or more category does not exist."); // errors
        try {
            const DBResponse = yield models_1.Product.create({
                dimensions,
                weight,
                name,
                SKU,
                category,
                stock,
                price,
                imgURL: `${imgURL}`,
                description,
                shortDescription,
                alt,
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
        const URL = `/@fs/${path_1.default.resolve("../../uploads")}/${file.filename}`;
        const convertedURL = URL.replace(/^\\\\\?\\/, "")
            .replace(/\\/g, "/")
            .replace(/\/\/+/g, "/");
        return response.status(201).json(convertedURL);
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
    paginate: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { searchTerm, page, perPage = 10, categories = [], } = request.query;
        let search = "";
        if (!(page && perPage))
            return response.status(400).json(errors_1.default.bad_request);
        try {
            const skip = (Number(page) - 1) * Number(perPage);
            const limit = Number(perPage);
            const query = {};
            ///////////////////////
            if (searchTerm)
                search = searchTerm;
            if (categories.length > 0) {
                Object.assign(query, {
                    $and: [
                        { "category.code": { $in: categories } },
                        {
                            $or: [
                                { "category.name": { $regex: `${search}`, $options: "i" } },
                                { name: { $regex: `${search}`, $options: "i" } },
                            ],
                        },
                    ],
                });
            }
            else {
                Object.assign(query, {
                    $or: [
                        { "category.name": { $regex: `${search}`, $options: "i" } },
                        { name: { $regex: `${search}`, $options: "i" } },
                    ],
                });
            }
            const totalProducts = yield models_1.Product.count(query);
            const DBResponse = yield models_1.Product.find(query)
                .limit(limit)
                .skip(skip)
                .sort({ name: "asc" });
            if (isTest)
                console.log("page :" + page, "perPage: " + perPage);
            if (!DBResponse.length)
                return response.status(404).json(errors_1.default.not_found);
            const responseJSON = {
                totalProducts: totalProducts,
                totalPages: Math.ceil(totalProducts / Number(perPage)),
                products: DBResponse,
            };
            return response.status(200).json(responseJSON);
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
                _id: id,
            }, {
                $set: {
                    name,
                    SKU,
                    dimensions,
                    weight,
                    category,
                    stock,
                },
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
