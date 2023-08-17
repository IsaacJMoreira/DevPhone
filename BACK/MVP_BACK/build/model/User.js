"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email, phone1, phone2, address, adressNumber, bairro, zipCode) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone1 = phone1;
        this.phone2 = phone2;
        this.address = address;
        this.adressNumber = adressNumber;
        this.bairro = bairro;
        this.zipCode = zipCode;
    }
}
exports.User = User;
