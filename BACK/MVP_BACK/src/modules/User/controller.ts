import { Request,Response, response } from "express";
import { User } from "../../models";
import errors from "../errors";
import cryptoProvider from "../../infra/providers/CryptoProvider";

const isTest= true;

const userControllers = {
 async create(req:Request, res:Response){
    const{
        name,
        email,
        credential,
        password
    } = req.body;

    const newEncryptedPass =  cryptoProvider.hashSync(password, 10);

    try {
        const newUser= await User.create({
        name,
        email,
        password : newEncryptedPass,
        });
      if(isTest) console.log(newUser)
      return res.header("Access-Control-Allow-Origin", "*").status(201).json(newUser);
    } catch (error) {

        if(isTest) console.log(error);
        return res.header("Access-Control-Allow-Origin", "*").status(500).json(errors.internal_server_error)
    }
 },

 async createADM(req:Request,res:Response){
    const{
        name,
        email,
        password
    } = req.body;

    const newEncryptedPass =  cryptoProvider.hashSync(password, 10);

    try {
        const newUser= await User.create({
        name,
        email,
        credential: "ADM",
        password : newEncryptedPass,
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
        return res.header("Access-Control-Allow-Origin", "*").status(200).json(users);
        
    } catch (error) {

        if(isTest) console.log(error);
        response.header("Access-Control-Allow-Origin", "*").status(500).json(errors.internal_server_error);
    }
 },

 async findOne(req:Request,res:Response){
    const{id} = req.params
    try {
        const user = await User.findById(id)

        if(!user) return res.header("Access-Control-Allow-Origin", "*").status(404).json(errors.not_found) 
        return res.header("Access-Control-Allow-Origin", "*").status(200).json(user);
    } catch (error) {

        if(isTest) console.log(error);
        return res.header("Access-Control-Allow-Origin", "*").status(500).json(errors.internal_server_error)
    }
 },
 async update(req:Request,res:Response){

   const {id} = req.params
   const {
         name,
         email,
         password,
         credential
        }= req.body;

        const newEncryptedPass =  cryptoProvider.hashSync(password, 10);

    try {
        const updateUser= await User.updateOne({
            _id: id,
          },
          {
            $set: {
               name,
               email,
               password: newEncryptedPass,
               credential
            }
        });

        return res.header("Access-Control-Allow-Origin", "*").status(204).json(updateUser);


    } catch (error) {
        if(isTest) console.log(error);
        res.header("Access-Control-Allow-Origin", "*").status(500).json(errors.internal_server_error);
    }

},

 };

 /*  I REMOVED THE DELETE METHOD. 
     A USER WILL NOT BE DELETED. 
     IT WILL BE FLAGED 🚩 WITH THE
     "INACTIVE" CREDENTIAL.
     (WITH THE UPDATE METHOD) 
     */


export default userControllers; 
