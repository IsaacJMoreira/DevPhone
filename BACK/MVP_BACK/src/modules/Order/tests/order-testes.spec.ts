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
      status: "string",
      items: {
        itemID: "string",
        itemSKU: "string",
        quantity: "121",
      },
      ownerID: "string",
      shippingCode: "454234000",
      enabled: "SIM",
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

    const orderService = new OrderService();
    const createdOrder = await orderService.create(orderData);

    expect(createdOrder).toBeDefined();
  });

  test("Deve atualizar uma Order existente", async () => {
    const orderData = {
      status: "string",
      items: {
        itemID: "string",
        itemSKU: "string",
        quantity: "121",
      },
      ownerID: "string",
      shippingCode: "454234000",
      enabled: "SIM",
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

    const createdOder = await Order.create(orderData);
    const updatedData = { name: "Updated Name" };

    const orderService = new OrderService();
    const updatedOrder = await orderService.update(
      createdOder._id.toString(),
      updatedData
    );

    expect(updatedOrder).toBeDefined();
    expect(updatedOrder.name).toBe(updatedData.name);
  });

  test("Deve retornar null ao atualizar uma Order inexistente", async () => {
    const updatedData = { name: "Updated Name" };

    const orderService = new OrderService();
    const updatedUser = await orderService.update(
      "no existent_id",
      updatedData
    );

    expect(updatedUser).toBeNull();
  });

  test("Deve encontrar um usuário pelo ID", async () => {
    const orderData = {
      status: "string",
      items: {
        itemID: "string",
        itemSKU: "string",
        quantity: "121",
      },
      ownerID: "string",
      shippingCode: "454234000",
      enabled: "SIM",
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

    const createdOder = await Order.create(orderData);

    const orderService = new OrderService();
    const foundOrder = await orderService.findOne(createdOder._id.toString());

    expect(foundOrder).toBeDefined();
    expect(foundOrder.name).toBe(orderData.ownerID);
  });

  test("Deve retornar null ao procurar um usuário inexistente", async () => {
    const orderService = new OrderService();
    const foundOrder = await orderService.findOne("no existent_id");

    expect(foundOrder).toBeNull();
  });

  test("Deve listar todos os usuários", async () => {
    const orderData1 = {
      status: "string",
      items: {
        itemID: "string",
        itemSKU: "string",
        quantity: "121",
      },
      ownerID: "string",
      shippingCode: "454234000",
      enabled: "SIM",
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
    const orderData2 = {
      status: "string",
      items: {
        itemID: "string",
        itemSKU: "string",
        quantity: "121",
      },
      ownerID: "string",
      shippingCode: "454234000",
      enabled: "SIM",
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
