const {validate, Joi } = require ("express-validation");
import { Request, Response, NextFunction } from "express";
const validateLogin = validate({
    body: Joi.object().keys ({
        email: Joi.string(),
        password: Joi.string().required(),
    })
})
const middlewareAuth = {
    login: async (request: Request,response: Response, next: NextFunction) =>{
        await validateLogin(request, response, next)
    },
}
export default middlewareAuth;