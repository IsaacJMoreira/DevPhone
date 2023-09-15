import { Db } from "mongodb";
import productRepository from "./productRepository";

const { MongoClient } = require("mongodb");

describe("Product repository", () => {
  const uri = global.URL;
  let connection;
  let db;

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
    const result = await productRepository.craate(payloadProduct);
    expect(result).toBeTruthy();
  });
});
