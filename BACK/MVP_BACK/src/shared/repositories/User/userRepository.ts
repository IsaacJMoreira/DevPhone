import User from "../../../modules/User/controller"

export default class userRepository implements IRepository{
    model: userModel 

    constructor(model:userModel){
        this.model = model
    }

    async create(payload: Omit<userPayload, 'create'| 'update'>): promise<user>{
       const result = await this.model.create({...payload, create:new Date().toISOString()})
       return result
    }
}