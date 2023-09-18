import { Product } from "../../../models";
import mongoose from "mongoose";

class ProductService {
  async create(product: any): Promise<any> {
    return Product.create(product);
  }

  async update(id: string, updatedProduct: any): Promise<any | null> {
    if(!mongoose.Types.ObjectId.isValid(id)){
      return null
    }
    const prod = await Product.findByIdAndUpdate(id, updatedProduct, { new: true });
    return prod;
  }

  async findOne(id: string): Promise<any | null> {
    if (!mongoose.Types.ObjectId.isValid(id)){
      return null
    }
    return Product.findById(id);
  }

  async findAll(): Promise<any[]> {
    return Product.find();
  }
}

export default ProductService;