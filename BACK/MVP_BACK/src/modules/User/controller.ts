import { Request,Response, response } from "express";
import { User } from "../../models";
const errors = require ("../errors")

const isTest= true;

const userController = {
 async create(req:Request,res:Response){
    const{
        nome,
        email,
        credential,
        password
    }= req.body;

    try {
        const newUser= await User.create({
        nome,
        email,
        credential,
        password,
    });
      if(isTest) console.log(newUser)
      return res.status(201).json(newUser);
    } catch (error) {

        if(isTest) console.log(error);
        return res.status(500).json(errors.internal_server_error)
    }
    
 },

 async findAll (req:Request,res:Response){
    
    try {
        const users= await User.find();

        if(!users.length) return res.status(404).json(errors.not_found);
        return res.status(200).json(users);
        
    } catch (error) {

        if(isTest) console.log(error);
        response.status(500).json(errors.internal_server_error);
    }
 },

 async findOne(req:Request,res:Response){
    const{id} = req.params
    try {
        const user = await User.findById(id)

        if(!user) return res.status(404).json(errors.not_found) 
        return res.status(200).json(user);
    } catch (error) {

        if(isTest) console.log(error);
        return res.status(500).json(errors.internal_server_error)
    }
 },
 async update(req:Request,res:Response){

   const {id} = req.params
   const {
         nome,
         email,
         password
        }= req.body;

    try {
        const updateUser= await User.updateOne({
            _id: id,
          },
          {
            $set: {
               nome,
               email,
               password,
            }
        });

        return res.sendStatus(204).json(updateUser);


    } catch (error) {
        if(isTest) console.log(error);
        res.status(500).json(errors.internal_server_error);
    }

 },
 async delete(req:Request,res:Response){
   const {id} = req.params;
    try {

       const deletUser =  await User.findByIdAndDelete(id);

        return res.sendStatus(204)
        
    } catch (error) {
        if(isTest) console.log(error);
            response.status(500).json(errors.internal_server_error); 
    }
    
 },
};


export default userController; 