import mongoose from "mongoose";
import { User } from "../../../models";
import UserService from "./user-test";

describe("Testes de UserService", () => {
  beforeAll(async () => {
    await mongoose.connect("mongodb://0.0.0.0:27017/DevPhon", {});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await User.deleteMany({});
  });

  test("Deve criar um usuário", async () => {
    const userData = {
      name: "John Doe",
      email: "john@example.com",
      credential: "CLI",
      password: "password123",
      address: {
        nikName: "Home",
        street: "123 Test St",
        number: "101",
        zipCode: "12345",
        neighborhood: "Test Neighborhood",
        city: "Test City",
        state: "Test State",
        country: "Test Country",
      },
    };

    const userService = new UserService();
    const createdUser = await userService.create(userData);

    expect(createdUser).toBeDefined();
  });

  test("Deve atualizar um usuário existente", async () => {
    const userData = {
      name: "John Doe",
      email: "john@example.com",
      credential: "CLI",
      password: "password123",
      address: {
        nikName: "Home",
        street: "123 Test St",
        number: "101",
        zipCode: "12345",
        neighborhood: "Test Neighborhood",
        city: "Test City",
        state: "Test State",
        country: "Test Country",
      },
    };

    const createdUser = await User.create(userData);
    const updatedData = { name: "Updated Name" };

    const userService = new UserService();
    const updatedUser = await userService.update(createdUser._id, updatedData);

    expect(updatedUser).toBeDefined();
    expect(updatedUser.name).toBe(updatedData.name);
  });

  test("Deve retornar null ao atualizar um usuário inexistente", async () => {
    const updatedData = { name: "Updated Name" };

    const userService = new UserService();
    const updatedUser = await userService.update("no existent_id", updatedData);

    expect(updatedUser).toBeNull();
  });

  test("Deve encontrar um usuário pelo ID", async () => {
    const userData = {
      name: "John Doe",
      email: "john@example.com",
      credential: "CLI",
      password: "password123",
      address: {
        nikName: "Home",
        street: "123 Test St",
        number: "101",
        zipCode: "12345",
        neighborhood: "Test Neighborhood",
        city: "Test City",
        state: "Test State",
        country: "Test Country",
      },
    };

    const createdUser = await User.create(userData);

    const userService = new UserService();
    const foundUser = await userService.findOne(createdUser._id);

    expect(foundUser).toBeDefined();
    expect(foundUser.name).toBe(userData.name);
  });

  test("Deve retornar null ao procurar um usuário inexistente", async () => {
    const userService = new UserService();
    const foundUser = await userService.findOne("no existent_id");

    expect(foundUser).toBeNull();
  });

  test("Deve listar todos os usuários", async () => {
    const userData1 = {
      name: "User 1",
      email: "user1@example.com",
      credential: "CLI",
      password: "password123",
      address: {
        nikName: "Home",
        street: "123 Test St",
        number: "101",
        zipCode: "12345",
        neighborhood: "Test Neighborhood",
        city: "Test City",
        state: "Test State",
        country: "Test Country",
      },
    };
    const userData2 = {
      name: "User 2",
      email: "user2@example.com",
      credential: "CLI",
      password: "password123",
      address: {
        nikName: "Home",
        street: "123 Test St",
        number: "101",
        zipCode: "12345",
        neighborhood: "Test Neighborhood",
        city: "Test City",
        state: "Test State",
        country: "Test Country",
      },
    };

    await User.create(userData1);
    await User.create(userData2);

    const userService = new UserService();
    const allUsers = await userService.findAll();

    expect(allUsers.length).toBe(2);
  });
});
