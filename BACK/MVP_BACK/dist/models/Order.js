"use strict";
/*****************************************
 *        🤓 ISAAC ESTEVE AQUI 🤓       *
 *****************************************/
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const shoppingCartSchema = new mongoose_1.Schema({
    status: {
        type: String,
        required: true,
        default: "Esperando confirmação de pagamento",
    },
    items: [
        {
            itemID: { type: String, required: true },
            itemSKU: { type: String, required: true },
            quantity: { type: Number, required: true },
        },
    ],
    ownerID: { type: String, required: true },
    shippingCode: { type: String, required: true, default: " " },
    address: {
        nikName: { type: String, required: true },
        street: { type: String, required: true },
        number: { type: String, required: true },
        zipCode: { type: String, required: true },
        neighborhood: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true },
    },
    enabled: { type: Boolean, required: true, default: true },
}, {
    timestamps: true,
});
const Order = (0, mongoose_1.model)("Order", shoppingCartSchema);
exports.default = Order;
