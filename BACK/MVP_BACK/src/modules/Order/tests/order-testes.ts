import { Order } from "../../../models";

class OrderService {
  async create(order: any): Promise<any> {
    return Order.create(order);
  }

  async update(id: string, updatedOrder: any): Promise<any | null> {
    const Orded = await Order.findByIdAndUpdate(id, updatedOrder, { new: true });
    return Orded;
  }

  async findOne(id: string): Promise<any | null> {
    return Order.findById(id);
  }

  async findAll(): Promise<any[]> {
    return Order.find();
  }
}

export default OrderService;
