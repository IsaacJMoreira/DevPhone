"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const imagesSchema = new mongoose_1.Schema({
    link: {
        type: mongoose_1.Schema.Types.String,
    },
    nome: {
        type: mongoose_1.Schema.Types.String,
    },
    cliente: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Client",
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Images", imagesSchema);
