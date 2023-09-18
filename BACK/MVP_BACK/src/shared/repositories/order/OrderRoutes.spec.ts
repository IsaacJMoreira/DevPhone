import request from "supertest";
import route from "./OrderRoutes";

describe("Testes de Rotas", () => {
  it("Deve buscar todas as Orders", async () => {
    const response = await request(route).get("/orders");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Todas as Orders" });
  });

  it("Deve criar uma Order", async () => {
    const OrderData = {
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

    const response = await request(route).post("/order/").send(OrderData);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({message:"Order criado com sucesso!"});
  });

  it("Deve atualizar uma order por ID", async () => {
    const ownerID = "1"; // Use ownerID em vez de orderId
  const updatedOrderData = {
    nikName: "Daniel",
  };

  const response = await request(route)
    .put(`/order/${ownerID}`) // Use ${ownerID} em vez de ${orderId}
    .send(updatedOrderData);

  expect(response.status).toBe(200);
  expect(response.body).toEqual({ message: `Order com ID ${ownerID} atualizado` });
    // const ownerID = "1";
    // const updatedOrderData = {
    //     nikName: "Daniel",
    // };

    // const response = await request(route)
    //   .put(`/order/${ownerID}`)
    //   .send(updatedOrderData);

    // expect(response.status).toBe(200);
    // expect(response.body).toEqual({message:`Order com ID ${ownerID} atualizado`});
  });
});