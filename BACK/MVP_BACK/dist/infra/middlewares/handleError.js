"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { ValidationError } = require("express-validation");
const globalErrorHandler = (error, request, response, next) => {
    if (error instanceof ValidationError) {
        return response.status(error.statusCode).json(error);
    }
    return response.status(500).json(error);
};
exports.default = globalErrorHandler;
