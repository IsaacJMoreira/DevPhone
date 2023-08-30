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
const CryptoProvider_1 = __importDefault(require("../../infra/providers/CryptoProvider"));
const errors_1 = __importDefault(require("../errors"));
const Token_1 = require("../../infra/providers/Token");
const isTest = true; //ATTENTION!!!! REMOVE!
const authControllers = {
    login: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const suposedUser = request.body;
        const DBResponse = yield models_1.User.findOne({ "email": suposedUser.email });
        if (!DBResponse)
            return response.status(404).json(errors_1.default.not_found);
        if (!CryptoProvider_1.default.compareSync(suposedUser.password, DBResponse.password)) {
            return response.status(401).json(errors_1.default.unauthorized);
        }
        const token = Token_1.tokenProvider.sign({
            id: DBResponse._id,
            email: DBResponse.email,
            name: DBResponse.name
        }, Token_1.secret.key);
        return response.status(200).json(token);
        ;
    })
};
exports.default = authControllers;
