"use strict";
/*****************************************
 *        🤓 ISAAC ESTEVE AQUI 🤓       *
 *****************************************/
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
;
;
;
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    SKU: { type: String, required: true },
    dimensions: {
        height: { type: Number, required: true },
        width: { type: Number, required: true },
        length: { type: Number, required: true },
        dimension: { type: String, required: true, default: "cm" },
    },
    weight: {
        weight: { type: Number, required: true },
        dimension: { type: String, required: true, default: "g" },
    },
    category: [{
            code: { type: String, required: true },
            name: { type: String, required: true },
            fatherCategory: { type: String, required: true, default: "root" },
        }, {
            _id: false
        }],
    stock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    imgURL: { type: String, required: true },
    description: { type: String, required: true },
    shortDescription: { type: String, required: true },
    alt: { type: String, required: true },
    enabled: { type: Boolean, required: true, default: true }
}, {
    timestamps: true
});
const Product = (0, mongoose_1.model)('Product', productSchema);
exports.default = Product;
