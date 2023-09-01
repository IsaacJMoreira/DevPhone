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
        if(!bcrypt.compareSync(password, usuario.password)){
            return res.status(401).json(errors.shall_not_pass);//🧙 U SHALL NOT PASS
        }

        const token = jwt.sign({id: usuario.id, email: usuario.email, name: usuario.name, credential: usuario.credential}, secret.key);
        return res.json(token);
    },



};

export default AuthController;
