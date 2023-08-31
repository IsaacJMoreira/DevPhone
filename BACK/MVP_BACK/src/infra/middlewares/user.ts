const {validate, Joi } = require ("express-validation");


const validatePost = validate({
    body: Joi.object().keys ({
        nome: Joi.string().required(),
        email: Joi.string().required(),
    })
})

const validateUpdate = validate({
    body: Joi.object().keys ({
        nome: Joi.string().required(),
        email: Joi.string().required(),
        passaword: Joi.string().required()
    })
})


const middlewareUser = {
    newUser: async (require: any,response: any, next: any) =>{
        await validatePost(require, response,next)
    },
    
    updateUser: async (require: any,response: any, next: any) =>{
        await  validateUpdate(require ,response,next);
    } 
   
}

module.exports = middlewareUser;