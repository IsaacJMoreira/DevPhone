import { Request, Response, NextFunction } from "express";
const { validate, Joi } = require("express-validation");

const validatePost = validate({
    body: Joi.object().keys({
        ownerID: Joi.string().required(),
        address: Joi.object().keys({
            nikName: Joi.string().min(3).max(30).required(),
            street: Joi.string().min(1).max(30).required(),
            number: Joi.string().min(1).max(30).required(),
            zipCode: Joi.string().min(1).max(30).required(),
            neighborhood: Joi.string().min(1).max(30).required(),
            city: Joi.string().min(1).max(30).required(),
            state: Joi.string().min(1).max(30).required(),
            country: Joi.string().min(1).max(30).required(),
        }).required(),
        items: Joi.array().items(Joi.object({
            itemID: Joi.string().required(),
            itemSKU: Joi.string().required(),
            quantity: Joi.number().min(1).required(),
        })).required()
    })
})


const validateUpdate = validate({
    body: Joi.object().keys({
        address: Joi.object().keys({
            nikName: Joi.string().min(3).max(30),
            street: Joi.string().min(1).max(30),
            number: Joi.string().min(1).max(30),
            zipCode: Joi.string().min(1).max(30),
            neighborhood: Joi.string().min(1).max(30),
            city: Joi.string().min(1).max(30),
            state: Joi.string().min(1).max(30),
            country: Joi.string().min(1).max(30),
        }),
        shippingCode: Joi.string().min(3).max(256),
        enabled: Joi.boolean(),
        status: Joi.string().min(5).max(256),
    })
})



const middlewareOrder = {

    create: async (req: Request, res: Response, next: NextFunction) => {
        await validatePost(req, res, next)
    },
    update: async (req: Request, res: Response, next: NextFunction) => {
        await validateUpdate(req, res, next)
    }

}


export default middlewareOrder; 