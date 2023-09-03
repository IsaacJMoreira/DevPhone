const {validate, Joi } = require ("express-validation");
import { Request, Response, NextFunction } from "express";


const validatePost = validate({
    body: Joi.object().keys ({
        name: Joi.string().min(4). max(30).required(),
        SKU: Joi.string().length(13).required(),
        dimensions: Joi.object().keys({
            height: Joi.number().required(),
            width:  Joi.number().required(),
            length: Joi.number().required(),
            dimension: Joi.string().min(1).max(3),
        }).required(),
        category: Joi.object({
            code: Joi.string().min(3).max(30).required(),
            name: Joi.string().min(3).max(30).required(),
            fatherCategory: Joi.string().min(1).max(30),
        }).required(),
        stock: Joi.number().required(),
        price: Joi.number().required(),
        imgURL: Joi.string().min(9).max(2048).required(),
        description: Joi.string().min(10).max(2048).required(),
        shortDesciption: Joi.string().min(30).max(140).required(),
        alt: Joi.string().min(3).max(30).required(),
        enabled: Joi.boolean(),        
    })
})

const validateUpdate = validate({
    body: Joi.object().keys ({
        name: Joi.string().min(4). max(30),
        SKU: Joi.string().length(13).required(),
        dimensions: Joi.object().keys({
            height: Joi.number(),
            width:  Joi.number(),
            length: Joi.number(),
            dimension: Joi.string().min(1).max(3),
        }),
        category: Joi.object({
            code: Joi.string().min(3).max(30),
            name: Joi.string().min(3).max(30),
            fatherCategory: Joi.string().min(1).max(30),
        }),
        stock: Joi.number(),
        price: Joi.number(),
        imgURL: Joi.string().min(9).max(2048),
        description: Joi.string().min(10).max(2048),
        shortDesciption: Joi.string().min(30).max(140),
        alt: Joi.string().min(3).max(30),
        enabled: Joi.boolean(),        
    })
})


const middlewareProducts = {
    newProduct: async (request: Request,response: Response, next: NextFunction) =>{
        await validatePost(request, response, next)
    },
    
    updateProduct: async (request: Request,response: Response, next: NextFunction) =>{
        await  validateUpdate(request ,response, next);
    } 
   
}

export default middlewareProducts;