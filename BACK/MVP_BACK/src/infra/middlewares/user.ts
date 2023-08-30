const {validate, Joi } = require ("express-validation");
import { Request, Response, NextFunction } from "express";


const validatePost = validate({
    body: Joi.object().keys ({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(30).required(),
        credential: Joi.string().valid("ADM","CLI","INACTIVE"),

    })
})

const validateUpdate = validate({
    body: Joi.object().keys ({
        name: Joi.string(),
        email: Joi.string(),
        password: Joi.string().min(8).max(30),
        credential: Joi.string().valid("ADM","CLI","INACTIVE"),
    })
})


const middlewareUsers = {
    newUser: async (request: Request,response: Response, next: NextFunction) =>{
        await validatePost(request, response, next)
    },
    
    updateUser: async (request: Request,response: Response, next: NextFunction) =>{
        await  validateUpdate(request ,response, next);
    } 
   
}

module.exports = middlewareUsers;