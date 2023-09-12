import { Request, Response, NextFunction } from "express";
const { validate, Joi } = require("express-validation");

const validatePost = validate({
    body: Joi.object().keys({
        ownerID: Joi.string().required(),
        addressNickName: Joi.string().min(3).max(30).required(),
        itens: Joi.object({
            itemID: Joi.string().required(),
            itemSKU: Joi.string().required(),
            quantity: Joi.number().min(1).required(),
        }).required()
    })
})


const validateUpdate = validate({
    body: Joi.object().keys({
        addressNickName: Joi.string().min(3).max(30).required(),
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