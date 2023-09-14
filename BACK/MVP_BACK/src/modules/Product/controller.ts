/*****************************************
 *        🤓 ISAAC ESTEVE AQUI 🤓       *
 *****************************************/

import { Request, Response } from "express";
import { Product, Categorie } from "../../models";
import errors from "../errors";
import path from "path";

const isTest = false; //ATTENTION!!!! REMOVE!

const productControllers = {
  create: async (request: Request, response: Response) => {
    const {
      dimensions,
      weight,
      name,
      SKU,
      category,
      stock,
      price,
      imgURL,
      description,
      shortDescription,
      alt,
    } = request.body;

    const categoryIsPresent = await Categorie.find({
      code: {
        $in: category.map((category: any) => category.code), //type later ⚠
      },
    });

    console.log(categoryIsPresent);

    if (categoryIsPresent.length <= 0)
      return response.status(412).json("One or more category does not exist."); // errors

    try {
      const DBResponse = await Product.create({
        dimensions,
        weight,
        name,
        SKU,
        category,
        stock,
        price,
        imgURL: `${imgURL}`, //MUDE ISSO DE ACORDO COM SUA MAQUINA!!!
        description,
        shortDescription,
        alt,
      });
      //IDEALY, WE WILL DEAL WITH THE IMAGES HERE
      if (isTest) console.log(DBResponse);
      return response.sendStatus(200);
    } catch (error) {
      if (isTest) console.log(error);
      return response.status(500).json(errors.internal_server_error);
    }
  },

  imgUpload: async (request: Request, response: Response) => {
    const { file } = request;

    if (!file?.destination)
      return response.status(400).json(errors.bad_request);

    const URL = `/@fs/${path.resolve("../../uploads")}/${file.filename}`;

    const convertedURL = URL.replace(/^\\\\\?\\/, "")
      .replace(/\\/g, "/")
      .replace(/\/\/+/g, "/");

    return response.status(201).json(convertedURL);
  },

  findOne: async (request: Request, response: Response) => {
    const { id } = request.params;
    try {
      const DBResponse = await Product.findById({ _id: id });

      if (!DBResponse) return response.status(404).json(errors.not_found);

      return response.status(200).json(DBResponse);
    } catch (error) {
      if (isTest) console.log(error);
      response.status(500).json(errors.internal_server_error);
    }
  },

  paginate: async (request: Request, response: Response) => {
    const {
      searchTerm,
      page,
      perPage = 10,
      categories = [],
    } = request.query as {
      page?: string;
      perPage?: string;
      categories?: string[];
      searchTerm?: string;
    };

    let search = "";

    if (!(page && perPage))
      return response.status(400).json(errors.bad_request);

    try {
      const skip = (Number(page) - 1) * Number(perPage);
      const limit = Number(perPage);
      const query = {};
      ///////////////////////

      if (searchTerm) search = searchTerm;

      if (categories.length > 0) {
        Object.assign(query, {
          $and: [
            { "category.code": { $in: categories } },
            {
              $or: [
                { "category.name": { $regex: `${search}`, $options: "i" } },
                { name: { $regex: `${search}`, $options: "i" } },
              ],
            },
          ],
        });
      } else {
        Object.assign(query, {
          $or: [
            { "category.name": { $regex: `${search}`, $options: "i" } },
            { name: { $regex: `${search}`, $options: "i" } },
          ],
        });
      }

      const totalProducts = await Product.count(query);

      const DBResponse = await Product.find(query)
        .limit(limit)
        .skip(skip)
        .sort({ name: "asc" });
      if (isTest) console.log("page :" + page, "perPage: " + perPage);

      if (!DBResponse.length)
        return response.status(404).json(errors.not_found);

      const responseJSON = {
        totalProducts: totalProducts,
        totalPages: Math.ceil(totalProducts / Number(perPage)),
        products: DBResponse,
      };
      return response.status(200).json(responseJSON);
    } catch (error) {
      if (isTest) console.log(error);
      response.status(500).json(errors.internal_server_error);
    }
  },

  update: async (request: Request, response: Response) => {
    const { id } = request.params;
    const { name, SKU, dimensions, weight, category, stock } = request.body;

    try {
      const DBResponse = await Product.updateOne(
        {
          _id: id,
        },
        {
          $set: {
            name,
            SKU,
            dimensions,
            weight,
            category,
            stock,
          },
        }
      );

      return response.status(204).json(DBResponse);
    } catch (error) {
      if (isTest) console.log(error);
      response.status(500).json(errors.internal_server_error);
    }
  },
};

export default productControllers;
