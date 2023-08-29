const {validate, Joi } = require ("express-validation");
const userdata = require ("../../modules/User/controller")

const validatePost = validate({
    body: Joi.object().keys ({
        nome: Joi.string().required(),
        email: Joi.string().required(),
        credential: Joi.string().required(),
        password: Joi.string().min(6).max(20).required()
    })
})

const validateUpdate = validate({
    body: Joi.object().keys ({
        nome: Joi.string().required(),
        email: Joi.string().required(),
        credential: Joi.string().required(),
        passaword: Joi.string().min(6).max(20).required(),
        Adreess: Joi.IAddress().required()
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