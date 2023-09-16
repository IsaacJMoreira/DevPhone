import { User } from "../../../models";

class UserService {
  async create(user: any): Promise<any> {
    return User.create(user);
  }

  async update(id: string, updatedUser: any): Promise<any | null> {
    const user = await User.findByIdAndUpdate(id, updatedUser, { new: true });
    return user;
  }

  async findOne(id: string): Promise<any | null> {
    return User.findById(id);
  }

  async findAll(): Promise<any[]> {
    return User.find();
  }
}

export default UserService;

