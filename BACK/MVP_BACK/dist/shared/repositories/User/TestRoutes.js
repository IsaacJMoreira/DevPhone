"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route = (0, express_1.default)();
route.get("/allusers", (req, res) => {
    res.status(200).json(console.log("Todos os Users"));
});
route.get("/profile/:id", (req, res) => {
    const userId = req.params.id;
    res.json(`Usuário com ID ${userId} atualizado`);
});
route.post("/api/users", (req, res) => {
    res.status(201).json(console.log("User criado com sucesso!"));
});
route.put("/profile/:id", (req, res) => {
    const userId = req.params.id;
    res.json(`Usuário com ID ${userId} atualizado`);
});
exports.default = route;
