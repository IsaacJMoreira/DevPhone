import { User } from "../../../models";
import IRepository from "../../../infra/core/IRepository";
import { ModelStatic } from "sequelize";

export default class UserRepository implements IRepository {
  model: ModelStatic<User>;

  constructor(model: ModelStatic<User>) {
    this.model = model;
  }
  async create(payload: Partial<User>): Promise<User> {
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
  async existBtid(): Promise<void> {
    const result = await User.count({ where: {} });
    return Boolean(result);
  }
}
