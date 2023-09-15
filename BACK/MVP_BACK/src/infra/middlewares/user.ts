const {validate, Joi } = require ("express-validation");
import { Request, Response, NextFunction } from "express";


const validatePost = validate({
    body: Joi.object().keys ({
        name: Joi.string().min(2).max(30).required(),
        email: Joi.string().email().required(),
        mainPhone: Joi.string().min(8).max(14),
        password: Joi.string().min(8).max(30).required(),
        credential: Joi.string().valid("ADM","CLI","INACTIVE"),
        address: Joi.array().items(
        Joi.object({//the user can fill those later ;)
            nikName: Joi.string().min(3).max(30),
            street: Joi.string().min(1).max(30),
            number: Joi.string().min(1).max(30),
            zipCode: Joi.string().min(1).max(30),
            neighborhood: Joi.string().min(1).max(30),
            city: Joi.string().min(1).max(30),
            state: Joi.string().min(1).max(30),
            country: Joi.string().min(1).max(30),
        })),

    })
})

const validateUpdate = validate({
    body: Joi.object().keys ({
        name: Joi.string().min(2).max(30),
        email: Joi.string().email(),
        mainPhone: Joi.string().min(8).max(14),
        password: Joi.string().min(8).max(30),
        credential: Joi.string().valid("ADM","CLI","INACTIVE"),
        address: Joi.object({
            nikName: Joi.string().min(3).max(30),
            street: Joi.string().min(1).max(30),
            number: Joi.string().min(1).max(30),
            zipCode: Joi.string().min(1).max(30),
            neighborhood: Joi.string().min(1).max(30),
            city: Joi.string().min(1).max(30),
            state: Joi.string().min(1).max(30),
            country: Joi.string().min(1).max(30),
        }),

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

export default middlewareUsers;