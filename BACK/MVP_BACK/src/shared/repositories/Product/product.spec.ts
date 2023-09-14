import { mongoDB } from "./../../../database/index";
import { MongoClient, MongoDBNamespace } from "mongodb";
import { Db } from "mongodb";
import productRepository from"./productRepository";

describe("User repository", () => {
  const uri = mongoDB;
  let connection: MongoClient;
  let db: Db;

  beforeAll(async () => {
    connection = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db();
  });

  afterAll(async () => {
    await connection.close();
  });

  test("Shold crud Product in Db", async () => {
    const payloadProduct = {
      name: "string",
      SKU: "string",
      dimensions: "IDimensions",
      weight: "IWeight",
      category: "ICategory",
      stock: "number",
      price: "number",
      imgURL: "string",
      description: "string",
      shortDescription: "string",
      alt: "string",
      enabled: "boolean",
    };
    const result = await productRepository.craate(payloadProduct)
    expect(result).toBeTruthy();

  });
});
