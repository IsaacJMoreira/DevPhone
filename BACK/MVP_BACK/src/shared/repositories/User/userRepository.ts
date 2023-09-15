import { any } from "joi";
import userControllers from "../../../modules/User/controller";


export class UserRepo{

    public async RepoFindAll(){
        try {
            return await userControllers.findAll();
            
        } catch (error) {
            console.log(error)
        }
    }
    public async RepoFindId(id:string):any{
        try {
            return await userControllers.findOne(id:string):any;
            
        } catch (error) {
            console.log(error)
        }
    }
}


