import { Request, Response, NextFunction } from "express";

import { expressjwt, Request as JWTRequest } from "express-jwt";

import errors from "../../modules/errors";

interface IPayload{
    id: string;
    email: string,
    name: string,
    credential: string,
    iat: number,
}


const validateCredential = {
    CLI: async (request: JWTRequest,response: Response, next: NextFunction) =>{
        const payload: IPayload | any = request.auth;

        if(payload.credential != "CLI") return response.status(403).json(errors.forbidden + "  not a CLI");
        
        next();
    },
    
    ADM: async (request: JWTRequest,response: Response, next: NextFunction) =>{
        const payload: IPayload | any = request.auth;

        if(payload.credential != "ADM") return response.status(403).json(errors.forbidden + " not an ADM");
        
        next();
    },
   
}

export default validateCredential;