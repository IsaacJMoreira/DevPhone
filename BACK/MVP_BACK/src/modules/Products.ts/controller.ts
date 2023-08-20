import { Request,Response } from "express";
import { Product } from "../../models";

const controller = {
    async create(req:Request,res:Response){
     const {name,SKU,dimensions,category}= req.body;
    
     const newProduct = await Product.create({
        name,
        SKU,
        dimensions,
        category,
     })
    
     return res.status(201).json(newProduct);
},
    async findAll(req:Request,res: Response){
     const findProduct = await Product.find(); 

     return res.json(findProduct);
},
    async findOne(req:Request,res: Response){ 
     const {id} = req.params

     const findProduct = await Product.findById(id); 

     return res.status(200).json(findProduct);
 },

    async update(req:Request,res:Response){
        const {id} = req.params
        const {name,SKU,dimensions,category}= req.body
        
        const updateProduct = await Product.updateOne({
            _id:id,
        },{
            $set:{
            name,
            SKU,
            dimensions,
            category,
        }
     })

        return res.status(204);
    },

    async delete(req:Request,res:Response){
        const{id}=  req.params

        await Product.findByIdAndDelete(id)

        return res.status(204)
    }
};
export default Product;
