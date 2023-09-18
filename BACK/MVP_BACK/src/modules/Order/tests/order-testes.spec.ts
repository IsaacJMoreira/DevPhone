import mongoose from "mongoose";
import { Order } from "../../../models";
import OrderService from "./order-testes";

describe("Testes de OrderService", () => {
  beforeAll(async () => {
    await mongoose.connect("mongodb://0.0.0.0:27017/DevPhon", {});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await Order.deleteMany({});
  });

  test("Deve criar uma order", async () => {
    const orderData = {
      status: "Peding",
      items: {
        itemID: "1245",
        itemSKU: "12944812",
        quantity: "121",
      },
      ownerID: "user12553",
      shippingCode: "454234000",
      enabled: true,
      address: {
        nikName: "Sucam",
        street: "Av.Rosario",
        number: "231",
        zipCode: "43898-000",
        neighborhood: "cidade Nova",
        city: "Umburana",
        state: "Itaquitinga",
        country: "Brazil",
      },
    };

    const orderService = new OrderService();
    const createdOrder = await orderService.create(orderData);

    expect(createdOrder).toBeDefined();
  });

  test("Deve atualizar uma Order existente", async () => {
    const orderData = {
      status: "Peding",
      items: {
        itemID: "1245",
        itemSKU: "12944812",
        quantity: "121",
      },
      ownerID: "user12553",
      shippingCode: "454234000",
      enabled: true,
      address: {
        nikName: "Sucam",
        street: "Av.Rosario",
        number: "231",
        zipCode: "43898-000",
        neighborhood: "cidade Nova",
        city: "Umburana",
        state: "Itaquitinga",
        country: "Brazil",
      },
    };

    const createdOder = await Order.create(orderData);
    const updatedData = { owner: "user12553" };

    const orderService = new OrderService();
    const updatedOrder = await orderService.update(
      createdOder._id.toString(),
      updatedData
    );

    expect(updatedOrder).toBeDefined();
    expect(updatedOrder.ownerID).toBe(updatedData.owner);
  });

  test("Deve retornar null ao atualizar uma Order inexistente", async () => {
    const updatedData = { name: "Updated Name" };

    const orderService = new OrderService();
    const updatedOrder = await orderService.update(
      "no existent_id",
      updatedData
    );

    expect(updatedOrder).toBeNull();
  });

  test("Deve encontrar um usuário pelo ID", async () => {
    const orderData = {
      status: "Peding",
      items: {
        itemID: "1245",
        itemSKU: "12944812",
        quantity: "121",
      },
      ownerID: "user12553",
      shippingCode: "454234000",
      enabled: true,
      address: {
        nikName: "Sucam",
        street: "Av.Rosario",
        number: "231",
        zipCode: "43898-000",
        neighborhood: "cidade Nova",
        city: "Umburana",
        state: "Itaquitinga",
        country: "Brazil",
      },
    };

    const createdOder = await Order.create(orderData);
    // const updatedData = { name: "Updated Name" };
    const orderService = new OrderService();
    const updateOrder = await orderService.findOne(createdOder.id.toString());

    expect(updateOrder).toBeDefined();
    expect(updateOrder.ownerID).toBe(orderData.ownerID);
  });

  test("Deve retornar null ao procurar um usuário inexistente", async () => {
    const orderService = new OrderService();
    const orderId = new mongoose.Types.ObjectId()
    const updateOrder = await orderService.findOne(orderId.toString());

    expect(updateOrder).toBeNull();
  });

  test("Deve listar todos os usuários", async () => {
    const orderData1 = {
      status: "Peding",
      items: {
        itemID: "1245",
        itemSKU: "12944812",
        quantity: "121",
      },
      ownerID: "user12553",
      shippingCode: "454234000",
      enabled: true,
      address: {
        nikName: "Sucam",
        street: "Av.Rosario",
        number: "231",
        zipCode: "43898-000",
        neighborhood: "cidade Nova",
        city: "Umburana",
        state: "Itaquitinga",
        country: "Brazil",
      },
    };
    const orderData2 = {
      status: "string123123",
      items: {
        itemID: "string",
        itemSKU: "string",
        quantity: "121",
      },
      ownerID: "string",
      shippingCode: "454234000",
      enabled: true,
      address: {
        nikName: "Sucam",
        street: "Av.Rosario",
        number: "231",
        zipCode: "43898-000",
        neighborhood: "string",
        city: "Umburana",
        state: "Itaquitinga",
        country: "Brazil",
      },
    };

    await Order.create(orderData1);
    await Order.create(orderData2);

    const orderService = new OrderService();
    const allOrders = await orderService.findAll();

    expect(allOrders.length).toBe(2);
  });
});
