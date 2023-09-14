import { Product } from "../../../models";
import ProductRepository from "./productRepository";

export const productRepository = new ProductRepository(Product)