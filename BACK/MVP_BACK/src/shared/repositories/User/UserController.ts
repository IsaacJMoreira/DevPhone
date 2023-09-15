import { Request,Response} from "express";
import { UserRepo } from "./userRepository";

export class UserControl{
    public async getAllUser(req:Request,res:Response){
        const listUser = await UserRepo.recuperarTodos();
        res.status(200).json(listUser)
    }
    public async getAllUserId(req:Request,res:Response){
        let id:number = parseInt(req.params['id'])
        const result = await UserRepo.recuperarPeloId(id);
        if(result != null){
            res.status(200).json(result)
        }else{
            res.status(404).json(console.log("not found"));
        }
    }
}