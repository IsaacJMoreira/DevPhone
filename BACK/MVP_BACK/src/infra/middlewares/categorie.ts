import { Request,Response, NextFunction} from "express";
const {validate, Joi} = require ("express-validation");

const category = validate ({
    body: Joi.object().keys({
        code: Joi.string().min(3).max(30).required(),
        name: Joi.string().min(3).max(30).required(),
        fatherCategory: Joi.string().min(1).max(30),
    }).required()
})

const validateCreate = validate({
    body :Joi.object().keys({
        code: Joi.string().min(3).max(30).required(),
        name: Joi.string().min(3).max(30).required(),
        fatherCategory: Joi.string().min(1).max(30),
    })
})

const validateUp = ({
    body: Joi.object().keys({
        code: Joi.string ().optional (),
        nome: Joi.strig().min(3).max(30).required(),
        fatherCategory: Joi.string().min(1).max(30),
    })
})


const middlewareCat = {
    findallCategorie: async (req:Request , res: Response, next: NextFunction) => {
        await category (req,res,next)
    },
    createCategorie : async (req:Request , res: Response, next: NextFunction) => {
        await validateCreate (req,res,next)
    },
    updateCategorie: async (req:Request , res: Response, next: NextFunction) => {
        await validateUp (req,res,next)
    }

}

export default middlewareCat;  