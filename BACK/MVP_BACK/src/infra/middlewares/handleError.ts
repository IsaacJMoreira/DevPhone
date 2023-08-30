import {  Request, Response, NextFunction } from "express";
const {ValidationError} = require("express-validation");
const { UnauthorizedError } = require('express-jwt');
const globalErrorHandler = (
    error: any, 
    request: Request, 
    response: Response, 
    next: NextFunction) =>{

        if(error instanceof ValidationError)
            return response.status(error.statusCode).json(error);

        if(error instanceof UnauthorizedError)
            return response.status(error.status).json(error);
        
        return response. status(500).json(error);
    };

export default globalErrorHandler;