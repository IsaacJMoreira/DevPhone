import { User } from "../../models";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import secret from "../../infra/config/secret"
import errors from "../errors";


 const AuthController = {
    
    async login(req: Request, res: Response){
        const {email, password} = req.body

        const usuario = await User.findOne(
            {
              email: email,
            }
        );
        if(!usuario){
            return res.status(400).json(errors.bad_request)
        }
        if(usuario.credential === "INACTIVE"){
            return res.status(403).json(errors.forbidden);//can't login if user doesn't have a active account
        }
        if(!bcrypt.compareSync(password, usuario.password)){
            return res.status(401).json(errors.shall_not_pass);//🧙 U SHALL NOT PASS
        }

        const token = jwt.sign({id: usuario.id, email: usuario.email, name: usuario.name, credential: usuario.credential}, secret.key);
        return res.json({
            credential: usuario.credential,
            token: token
        });
    },



};

export default AuthController;
