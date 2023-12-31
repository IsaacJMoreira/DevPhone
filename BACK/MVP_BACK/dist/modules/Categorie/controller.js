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
const catergorieControllers = {
    create: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const newCategorie = request.body;
        try {
            const DBResponse = yield models_1.Categorie.find({ name: newCategorie.name }).count();
            //By demand, we need to check that no category is duplicated
            if (DBResponse)
                return response.status(403).json(errors_1.default.forbidden);
            yield models_1.Categorie.create(Object.assign({}, newCategorie));
            if (isTest)
                console.log("New Category created!");
            return response.sendStatus(200);
        }
        catch (error) {
            if (isTest)
                console.log(error);
            return response.status(500).json(errors_1.default.internal_server_error);
        }
    }),
    findOneByName: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const { name } = request.params;
        try {
            const DBResponse = yield models_1.Categorie.findOne({ name: name });
            if (!DBResponse)
                return response.status(404).json(errors_1.default.not_found);
            return response.status(200).json(DBResponse);
        }
        catch (error) {
            return response.status(500).json(errors_1.default.internal_server_error);
        }
    }),
    findAll: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const DBResponse = yield models_1.Categorie.find();
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
        const { name } = request.params;
        const toUpdate = request.body;
        try {
            const DBResponse = yield models_1.Categorie.findOneAndUpdate({
                name: name
            }, {
                $set: Object.assign({}, toUpdate)
            }, {
                new: true
            });
            if (!DBResponse)
                return response.status(404).json(errors_1.default.not_found);
            return response.status(200).json(DBResponse);
        }
        catch (error) {
            if (isTest)
                console.log(error);
            response.status(500).json(errors_1.default.internal_server_error);
        }
    })
};
exports.default = catergorieControllers;
