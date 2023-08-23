"use strict";
/*****************************************
 *        🤓 ISAAC ESTEVE AQUI 🤓       *
 *****************************************/
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    credential: { type: String, required: true, default: "CLIENT" },
    password: { type: String, required: true },
    address: [{
            nikName: { type: String, required: true },
            street: { type: String, required: true },
            number: { type: String, required: true },
            zipCode: { type: String, required: true },
            neighborhood: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            country: { type: String, required: true },
        }]
}, {
    timestamps: true,
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
