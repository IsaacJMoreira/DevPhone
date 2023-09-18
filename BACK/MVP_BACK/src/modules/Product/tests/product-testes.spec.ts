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

    const productService = new ProductService();
    const createdProd = await productService.create(productData);

    expect(createdProd).toBeDefined();
  });

  test("Deve atualizar um produto", async () => {
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
  
    const productService = new ProductService();
    const productId = new mongoose.Types.ObjectId();
    const updatedProd = await productService.findOne(productId.toString());

    expect(updatedProd).toBeNull();
  });

  test("Deve encontrar um produto pelo ID", async () => {
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

    const createdProd = await Product.create(productData);

    const productService = new ProductService();
    const updateProd = await productService.findOne(createdProd._id.toString());

    expect(updateProd).toBeDefined();
    expect(updateProd.name).toBe(productData.name);
  });

  test("Deve retornar null ao procurar um usuário inexistente", async () => {
    const productService = new ProductService();
    const updatedProd = await productService.findOne("no existent_id");

    expect(updatedProd).toBeNull();
  });

  test("Deve listar todos os usuários", async () => {
    const productData1 = {
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
    const productData2 = {
      name: "O Phone Plus",
      SKU: "ABC1123123", 
      dimensions: {
        height: 102, 
        width: 1,
        length: 16,
        dimension: 120, 
      },
      weight: {
        weight: 3.7, 
        dimensions: 3.2, 
      },
      category: {
        code: "1213",
        name: "Eletrônicos",
        fatherCategory: "Eletrônicos",
      },
      stock: 18,
      price: 1200, 
      imgURL: "image.jpg",
      description: "lasjdfklaskqweqwdf",
      shortDescription: "alsdfak14124jlsdf",
      alt: "Alt text", 
      enabled: true,
    };

    await Product.create(productData1);
    await Product.create(productData2);

    const productService = new ProductService();
    const allProduct = await productService.findAll();

    expect(allProduct.length).toBe(2);
  });
});
