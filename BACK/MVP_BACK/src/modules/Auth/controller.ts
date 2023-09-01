import { User } from "../../models";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import secret from "../../infra/config/secret"
import errors from "../errors";


 const AuthController = {
    
    async login(req: Request, res: Response){
        const {email, password} = req.body

        const usuarios = await User.findOne({
            where: {
              email,
            },
        });
        if(!usuarios){
            return res.status(400).json(errors.bad_request)
        }
        if(!bcrypt.compareSync(password, usuarios.password)){
            return res.status(401).json(errors.shall_not_pass);//🧙 U SHALL NOT PASS
        }

        const token = jwt.sign({id: usuarios.id, email: usuarios.email, name: usuarios.name}, secret.key);
        return res.json(token);
    },



};

export default AuthController;
