const {validate, Joi } = require ("express-validation");
import { Request, Response, NextFunction } from "express";


const validateLogin = validate({
    body: Joi.object().keys ({
        email: Joi.string().email("email não encontrado").required("campo obrigatorio"),
        password: Joi.string().min(6, "A senha deve ter 6 carcteres").required("campo obrigatorio"),
    })
})

const validateRegistro = validate({
    body: Joi.object().keys ({
        name: Joi.string().required("campo obrigatorio"),
        email: Joi.string().email("email não encontrado").required(),
        password: Joi.string().min(6, "A senha deve ter 6 carcteres").required(),
        confirmPassword: Joi.string().oneOf([Joi.ref("password"), null], "Senhas não são iguais.").required(),
    })
})


const middlewareAuth = {
    login: async (request: Request,response: Response, next: NextFunction) =>{
        await validateLogin(request, response, next)
    },
    registro: async (request: Request,response: Response, next: NextFunction) =>{
        await validateRegistro(request, response, next)
    }   
}

export default middlewareAuth;