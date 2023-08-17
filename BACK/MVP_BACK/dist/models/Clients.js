"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const clientSchema = new mongoose_1.Schema({
    nome: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    email: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        unique: true
    },
    senha: {
        type: mongoose_1.Schema.Types.String,
        required: true,
    },
    telefone: {
        type: mongoose_1.Schema.Types.String,
        required: false,
    },
    whatsapp: {
        type: mongoose_1.Schema.Types.String,
        required: false,
    },
    images: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Images",
        },
    ],
    hashReset: {
        type: mongoose_1.Schema.Types.String,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Clientes", clientSchema);
