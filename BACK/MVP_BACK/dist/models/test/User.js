"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.IUser = void 0;
const sequelize_1 = require("sequelize");
class IUser extends sequelize_1.Model {
}
exports.IUser = IUser;
;
exports.UserModel = User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primarykey: true,
        autoIncrement: true,
    },
    nome: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    Credential: {
        type: sequelize_1.DataTypes.STRING
    },
});
exports.default = exports.UserModel;
