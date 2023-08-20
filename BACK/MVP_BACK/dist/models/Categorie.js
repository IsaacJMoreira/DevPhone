"use strict";
/*****************************************
 *        🤓 ISAAC ESTEVE AQUI 🤓       *
 *****************************************/
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const categorySchema = new mongoose_1.Schema({
    code: { type: String, required: true },
    name: { type: String, required: true },
    fatherCategory: { type: String, required: true, default: "root" },
}, {
    timestamps: true
});
const Categorie = (0, mongoose_1.model)('Categories', categorySchema);
exports.default = Categorie;
