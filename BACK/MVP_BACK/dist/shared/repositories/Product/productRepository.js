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
const joi_1 = require("joi");
class ProductRepository {
    constructor(model) {
        this.model = model;
    }
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.create(Object.assign(Object.assign({}, payload), { createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }));
            return result;
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    findone() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    findall() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    delete() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    existByid(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.count({ where: { id } });
            return (0, joi_1.boolean)(result);
        });
    }
}
exports.default = ProductRepository;
