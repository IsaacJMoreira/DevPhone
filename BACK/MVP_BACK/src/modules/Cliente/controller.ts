import { Request,Response } from "express";
import { User } from "../../models";

const controller = {
 async create(req:Request,res:Response){
    const{nome,email,credential,password}= req.body;

    const newUser= await User.create({
        nome,
        email,
        credential,
        password,
    })

    return res.status(201).json(newUser);
 },

 async findAll (req:Request,res:Response){
    const users= await User.find();

    return res.json(users);
 },

 async creaOne(req:Request,res:Response){
    const{id} = req.params
    const user = await User.findById(id)

    return res.status(200).json(user);
 },
 async update(req:Request,res:Response){
   const {id} = req.params
   const{nome,email,password}= req.body;

    const updateUser= await User.updateOne({
      _id: id,
    },{
      $set: {
         nome,
         email,
         password,
      }
    })

    return res.sendStatus(204);
 },
 async delete(req:Request,res:Response){
   const {id} = req.params;

   await User.findByIdAndDelete(id);

   return res.sendStatus(204);
 },
};


export default User;