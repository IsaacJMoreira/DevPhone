import { Product } from "../../../models";
import { ModelStatic } from "sequelize";
import IRepository from "../../../infra/core/IRepository";

export default class ProductRepository implements IRepository {
  model: ModelStatic<Product>;

  constructor(model: ModelStatic<Product>) {
    this.model = model;
  }
  async create(payload: Partial<Product>): Promise<Product> {
    const result = await this.model.create({
      ...payload,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    return result;
  }
  async update(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async findone(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async findall(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async delete(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async existByid(): Promise<void> {
    const result = await Product.count({ where: {} });
    return result;
  }
}
