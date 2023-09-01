"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validation_1 = require("express-validation");
const express_jwt_1 = require("express-jwt");
const globalErrorHandler = (error, request, response, next) => {
    if (error instanceof express_validation_1.ValidationError)
        return response.status(error.statusCode).json(error);
    if (error instanceof express_jwt_1.UnauthorizedError)
        return response.status(error.status).json(error);
    return response.status(500).json(error);
};
exports.default = globalErrorHandler;
