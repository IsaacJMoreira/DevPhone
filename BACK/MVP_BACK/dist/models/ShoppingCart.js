"use strict";
/*****************************************
 *        🤓 ISAAC ESTEVE AQUI 🤓       *
 *****************************************/
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const shoppingCartSchema = new mongoose_1.Schema({
    fulfilled: { type: Boolean, required: true, default: false },
    items: [
        {
            itemID: { type: String, required: true },
            itemSKU: { type: String, required: true },
            quantity: { type: Number, required: true }
        }
    ],
    ownerID: { type: String, required: true }
}, {
    timestamps: true,
});
const ShoppingCart = (0, mongoose_1.model)('Shopping Cart', shoppingCartSchema);
exports.default = ShoppingCart;
