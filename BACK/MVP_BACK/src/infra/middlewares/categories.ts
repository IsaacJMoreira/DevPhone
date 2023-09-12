const { validate, Joi } = require("express-validation");
import { Request, Response, NextFunction } from "express";


const validatePost = validate({
    body: Joi.object().keys({
        code: Joi.string().min(5).max(30).required(),
        name: Joi.string().min(5).max(30).required(),
        fatherCategory: Joi.string().min(3).max(30).required(),
        enabled: Joi.boolean(),
    })
})

const validateUpdate = validate({
    body: Joi.object().keys({
        code: Joi.string().min(5).max(30),
        name: Joi.string().min(5).max(30),
        fatherCategory: Joi.string().min(3).max(30),
        enabled: Joi.boolean(),
    })
})


const middlewareCategories = {
    post: async (request: Request, response: Response, next: NextFunction) => {
        await validatePost(request, response, next)
    },

    update: async (request: Request, response: Response, next: NextFunction) => {
        await validateUpdate(request, response, next);
    }

}

export default middlewareCategories;