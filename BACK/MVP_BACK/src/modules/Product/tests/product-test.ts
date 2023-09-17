import { Product } from "../../../models";

class ProductService {
  async create(product: any): Promise<any> {
    return Product.create(product);
  }

  async update(id: string, updatedProduct: any): Promise<any | null> {
    const prod = await Product.findByIdAndUpdate(id, updatedProduct, { new: true });
    return prod;
  }

  async findOne(id: string): Promise<any | null> {
    return Product.findById(id);
  }

  async findAll(): Promise<any[]> {
    return Product.find();
  }
}

export default ProductService;