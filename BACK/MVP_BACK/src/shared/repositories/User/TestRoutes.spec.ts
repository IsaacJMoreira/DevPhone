import request from "supertest";
import route from "./TestRoutes";

describe("Testes de Rotas", () => {
  it("Deve buscar todos os usuários", async () => {
    const response = await request(route).get("/allusers");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Todos os Users" });
  });

  it("Deve criar um usuário", async () => {
    const userData = {
      name: "DOLLYNHO",
      email: "DOLLYNHO@email.com",
    };

    const response = await request(route).post("/api/users").send(userData);

    expect(response.status).toBe(201);
    expect(response.body).toEqual({message:"User criado com sucesso!"});
  });

  it("Deve atualizar um usuário por ID", async () => {
    const userId = "1";
    const updatedUserData = {
      name: "DOLLYNHO",
    };

    const response = await request(route)
      .put(`/profile/${userId}`)
      .send(updatedUserData);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({message:`Usuário com ID ${userId} atualizado`});
  });
});
