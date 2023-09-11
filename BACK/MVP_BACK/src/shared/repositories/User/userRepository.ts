import { ReturnDocument } from "mongodb";
import { User } from "../../../models";
import { UserModel, UserPayload } from "../../../models/User";

export default class UserRepository implements IRepository{

model: UserModel

constructor(model: UserModel){
    this.model = model
}
async create (payload: Omit<UserPayload, 'created'|'updatedAt' >): Promise<IUser>{
    throw new Error("Method not implemented.");
}
async update (): Promise<void>{
    throw new Error("Method not implemented.");
}
async findone (): Promise<void>{
    throw new Error("Method not implemented.");
}
async findall (): Promise<void>{
    throw new Error("Method not implemented.");
}
async delete(): Promise<void>{
    throw new Error("Method not implemented.");
}
async existBtid (): Promise<void>{
    const result = await User.count({where: {id}})
    return Boolean(result)
}
}