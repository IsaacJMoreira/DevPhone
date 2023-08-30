/*****************************************
 *        🤓 ISAAC ESTEVE AQUI 🤓       *
 *****************************************/

import { Request, Response } from "express";
import { User } from "../../models";
import cryptoProvider from "../../infra/providers/CryptoProvider"; 
import errors from "../errors";
import {tokenProvider, secret} from '../../infra/providers/Token'

const isTest = true;//ATTENTION!!!! REMOVE!

const authControllers = {

    login: async (request: Request, response: Response) => {
        
       const suposedUser = request.body;

       const DBResponse = await User.findOne({ "email": suposedUser.email });

       if(!DBResponse) return response.status(404).json(errors.not_found);

        if(!cryptoProvider.compareSync(suposedUser.password, DBResponse.password)){
            return response.status(401).json(errors.unauthorized);
        }

        const token = tokenProvider.sign({
            id: DBResponse._id,
            email: DBResponse.email,
            name: DBResponse.name
        },
            secret.key
        );

        return response.status(200).json(token);;
    }
    
}

export default  authControllers;