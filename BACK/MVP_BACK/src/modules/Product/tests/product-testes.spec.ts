import mongoose from "mongoose";
import { Product } from "../../../models";
import ProductService from "./product-test";

describe("Testes de ProductService", () => {
  beforeAll(async () => {
    await mongoose.connect("mongodb://0.0.0.0:27017/DevPhon", {});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await Product.deleteMany({});
  });

  test("Deve criar um produto ", async () => {
    const productData = {
      name: " O Phone",
      SKU: "",
      dimensions: {
        height: "number",
        width: "number",
        length: "number",
        dimension: "number", 
      },
      weight: {
        weight:"3.3 in",
        dimensions:"3.5in"
      },
      category: {
        code: "string",
        name: "string",
        fatherCategory: "string",
      },
      stock: "8",
      price: "$700",
      imgURL: "image.jpg" ,
      description: "lasjdfklaskdf",
      shortDescription: "alsdfakjlsdf",
      alt: "",
      enabled: "Yes",
    };

    const productService = new ProductService();
    const createdProd = await productService.create(productData);

    expect(createdProd).toBeDefined();
  });

  test("Deve atualizar um produto", async () => {
    const productData = {
      name: " O Phone",
      SKU: "",
      dimensions: {
        height: "number",
        width: "number",
        length: "number",
        dimension: "number", 
      },
      weight: {
        weight:"3.3 in",
        dimensions:"3.5in"
      },
      category: {
        code: "string",
        name: "string",
        fatherCategory: "string",
      },
      stock: "8",
      price: "$700",
      imgURL: "image.jpg" ,
      description: "lasjdfklaskdf",
      shortDescription: "alsdfakjlsdf",
      alt: "",
      enabled: "Yes",
    };

    const createdProd = await Product.create(productData);
    const updatedData = { name: "Updated Name" };

    const productService = new ProductService();
    const updatedProduct = await productService.update(
      createdProd._id.toString(),
      updatedData
    );

    expect(updatedProduct).toBeDefined();
    expect(updatedProduct.name).toBe(updatedData.name);
  });

  test("Deve retornar null ao atualizar um produto inexistente", async () => {
    const updatedData = { name: "Updated Name" };

    const productService = new ProductService();
    const updatedProd = await productService.update(
      "nonexistent_id",
      updatedData
    );

    expect(updatedProd).toBeNull();
  });

  test("Deve encontrar um produto pelo ID", async () => {
    const productData = {
      name: " O Phone",
      SKU: "",
      dimensions: {
        height: "number",
        width: "number",
        length: "number",
        dimension: "number", 
      },
      weight: {
        weight:"3.3 in",
        dimensions:"3.5in"
      },
      category: {
        code: "string",
        name: "string",
        fatherCategory: "string",
      },
      stock: "8",
      price: "$700",
      imgURL: "image.jpg" ,
      description: "lasjdfklaskdf",
      shortDescription: "alsdfakjlsdf",
      alt: "",
      enabled: "Yes",
    };

    const createdProd = await Product.create(productData);

    const productService = new ProductService();
    const foundProd = await productService.findOne(createdProd._id.toString());

    expect(foundProd).toBeDefined();
    expect(foundProd.name).toBe(productData.name);
  });

  test("Deve retornar null ao procurar um usuário inexistente", async () => {
    const productService = new ProductService();
    const foundUser = await productService.findOne("no existent_id");

    expect(foundUser).toBeNull();
  });

  test("Deve listar todos os usuários", async () => {
    const productData1 = {
      name: " O Phone",
      SKU: "",
      dimensions: {
        height: "number",
        width: "number",
        length: "number",
        dimension: "number", 
      },
      weight: {
        weight:"3.3 in",
        dimensions:"3.5in"
      },
      category: {
        code: "string",
        name: "string",
        fatherCategory: "string",
      },
      stock: "8",
      price: "$700",
      imgURL: "image.jpg" ,
      description: "lasjdfklaskdf",
      shortDescription: "alsdfakjlsdf",
      alt: "",
      enabled: "Yes",
    };
    const productData2 = {
      name: " O Phone",
      SKU: "",
      dimensions: {
        height: "number",
        width: "number",
        length: "number",
        dimension: "number", 
      },
      weight: {
        weight:"3.3 in",
        dimensions:"3.5in"
      },
      category: {
        code: "string",
        name: "string",
        fatherCategory: "string",
      },
      stock: "8",
      price: "$700",
      imgURL: "image.jpg" ,
      description: "lasjdfklaskdf",
      shortDescription: "alsdfakjlsdf",
      alt: "",
      enabled: "Yes",
    };

    await Product.create(productData1);
    await Product.create(productData2);

    const productService = new ProductService();
    const allProduct = await productService.findAll();

    expect(allProduct.length).toBe(2);
  });
});
