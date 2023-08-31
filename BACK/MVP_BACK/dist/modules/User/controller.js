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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = require("../../models");
const errors_1 = __importDefault(require("../errors"));
const CryptoProvider_1 = __importDefault(require("../../infra/providers/CryptoProvider"));
const isTest = true;
const userControllers = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, credential, password } = req.body;
            const newEncryptedPass = CryptoProvider_1.default.hashSync(password, 10);
            try {
                const newUser = yield models_1.User.create({
                    name,
                    email,
                    credential,
                    password: newEncryptedPass,
                });
                if (isTest)
                    console.log(newUser);
                return res.status(201).json(newUser);
            }
            catch (error) {
                if (isTest)
                    console.log(error);
                return res.status(500).json(errors_1.default.internal_server_error);
            }
        });
    },
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield models_1.User.find();
                if (!users.length)
                    return res.status(404).json(errors_1.default.not_found);
                return res.status(200).json(users);
            }
            catch (error) {
                if (isTest)
                    console.log(error);
                express_1.response.status(500).json(errors_1.default.internal_server_error);
            }
        });
    },
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const user = yield models_1.User.findById(id);
                if (!user)
                    return res.status(404).json(errors_1.default.not_found);
                return res.status(200).json(user);
            }
            catch (error) {
                if (isTest)
                    console.log(error);
                return res.status(500).json(errors_1.default.internal_server_error);
            }
        });
    },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { name, email, password, credential } = req.body;
            const newEncryptedPass = CryptoProvider_1.default.hashSync(password, 10);
            try {
                const updateUser = yield models_1.User.updateOne({
                    _id: id,
                }, {
                    $set: {
                        name,
                        email,
                        password: newEncryptedPass,
                        credential
                    }
                });
                return res.status(204).json(updateUser);
            }
            catch (error) {
                if (isTest)
                    console.log(error);
                res.status(500).json(errors_1.default.internal_server_error);
            }
        });
    },
};
/*  I REMOVED THE DELETE METHOD.
    A USER WILL NOT BE DELETED.
    IT WILL BE FLAGED 🚩 WITH THE
    "INACTIVE" CREDENTIAL.
    (WITH THE UPDATE METHOD)
    */
exports.default = userControllers;
