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
const models_1 = require("../../models");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret_1 = __importDefault(require("../../infra/config/secret"));
const errors_1 = __importDefault(require("../errors"));
const AuthController = {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const usuario = yield models_1.User.findOne({
                email: email,
            });
            if (!usuario) {
                return res.status(400).json(errors_1.default.bad_request);
            } // "compareSync" compara duas info, retorna true , false;
            if (!bcryptjs_1.default.compareSync(password, usuario.password)) {
                return res.status(401).json(errors_1.default.shall_not_pass); //🧙 U SHALL NOT PASS
            }
            const token = jsonwebtoken_1.default.sign({ id: usuario.id, email: usuario.email, name: usuario.name, credential: usuario.credential }, secret_1.default.key);
            return res.json(token);
        });
    },
};
exports.default = AuthController;
