"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("../database");
const BaseRoutes_1 = __importDefault(require("./BaseRoutes"));
const cors_1 = __importDefault(require("cors"));
class App {
    constructor() {
        this.defaultPort = 4000;
        this.instance = (0, express_1.default)();
    }
    setup(options) {
        database_1.mongoDB.createConnection();
        const selectedPort = options.port ? options.port : this.defaultPort;
        this.instance.use(express_1.default.json());
        this.instance.use(express_1.default.urlencoded());
        this.instance.use((0, cors_1.default)());
        this.instance.use(BaseRoutes_1.default); //this stays like this for now
        if (options.isTest)
            return;
        this.instance.listen(selectedPort, () => {
            console.log(`Server running with port: ${selectedPort}`);
        });
    }
    getInstance() {
        return this.instance;
    }
}
exports.default = App;
