import { promises } from "dns"
import User from "../../../modules/User/controller"
import { error } from "console"

export default class userRepository implements IRepository{
    model: userModel 

    constructor(model:userModel){
        this.model = model
    }

    async create(payload: Omit<userPayload, 'create'| 'update'>): promise<user>{
       const result = await this.model.create({...payload, create:new Date().toISOString()})
       return result
    }
    async update(): promise<void>{
        throw new Error("Merhod not implement")
    }
}