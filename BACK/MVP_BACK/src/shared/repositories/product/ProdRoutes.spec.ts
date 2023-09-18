import request from "supertest";
import route from "./ProdRoutes";

describe("Testes de Rotas", () => {
  it("Deve buscar todos os Produtos", async () => {
    const response = await request(route).get("/products/");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Todos os Produtos" });
  });

  it("Deve criar um Produto", async () => {
    const productData = {
        name: "O Phone",
        SKU: "ABC123", 
        dimensions: {
          height: 10, 
          width: 5,
          length: 15,
          dimension: 150, 
        },
        weight: {
          weight: 3.3, 
          dimensions: 3.5, 
        },
        category: {
          code: "123",
          name: "Eletrônicos",
          fatherCategory: "Eletrônicos",
        },
        stock: 8,
        price: 700, 
        imgURL: "image.jpg",
        description: "lasjdfklaskdf",
        shortDescription: "alsdfakjlsdf",
        alt: "Alt text", 
        enabled: true,
    };

    const response = await request(route).post("/newproduct").send(productData);

    expect(response.status).toBe(201);
    expect(response.body).toEqual({ message: "Produto criado com sucesso!" });
  });

  it("Deve atualizar o Produto por ID", async () => {
    const productId = "1";
    const updatedUserData = {
      name: "O Phone 2",
    };

    const response = await request(route)
      .put(`/product/${productId}`)
      .send(updatedUserData);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: `Produto com ID ${productId} atualizado` });
  });
});