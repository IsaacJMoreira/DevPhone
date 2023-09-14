import { Product } from "../../../models";
import { ModelStatic } from "sequelize";
import IRepository from "../../../infra/core/IRepository";


export default class ProductRepository implements IRepository{
    
   model:ModelStatic<typeof Product>
   
   constructor(model: ModelStatic<typeof Product>){
    this.model = model
}
async create (): Promise<void>{
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
async existByid (): Promise<void>{
    const result = await Product.count({where: {}})
    return result
}
}