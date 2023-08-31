"use strict";
/*****************************************
 *        🤓 ISAAC ESTEVE AQUI 🤓       *
 *****************************************/
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const shoppingCartSchema = new mongoose_1.Schema({
    status: { type: String, required: true, default: "Esperando confirmação de pagamento" },
    items: [
        {
            itemID: { type: String, required: true },
            itemSKU: { type: String, required: true },
            quantity: { type: Number, required: true }
        }
    ],
    ownerID: { type: String, required: true },
    shippingCode: { type: String, required: true, default: " " },
<<<<<<< HEAD
    enabled: { trype: Boolean, required: true, default: true }
=======
    enabled: { type: Boolean, required: true, default: true },
>>>>>>> dev
}, {
    timestamps: true,
});
const Order = (0, mongoose_1.model)('Order', shoppingCartSchema);
exports.default = Order;
