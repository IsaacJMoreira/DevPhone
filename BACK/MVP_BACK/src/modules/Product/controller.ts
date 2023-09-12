/*****************************************
 *        🤓 ISAAC ESTEVE AQUI 🤓       *
 *****************************************/

import { Request, Response } from "express";
import { Product } from "../../models";
import errors from "../errors";

const isTest = true;//ATTENTION!!!! REMOVE!

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
            alt
        } = request.body;
        //NEEDS TO RECEIVE E img FROM THE REQUEST
        //USE THE FACTORY TO DEAL WITH THE IMAGE EXTENSIONS
        try {
            const DBResponse = await Product.create({
                dimensions,
                weight,
                name,
                SKU,
                category,
                stock,
                price,
                imgURL: `../../../../../uploads${imgURL}`,
                description,
                shortDescription,
                alt
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

        if (!file?.destination) return response.status(400).json(errors.bad_request);
        return response.status(201).json(file.filename);

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
    search: async (request: Request, response: Response) => {

        let { query } = request.query as {
           query?: string
        };

        console.log(query)
        

        if (!query) {
            query = "";
        }


        try {

            const DBResponse = await Product.find(
                {
                    $or: [
                        { 'category.name':  { '$regex': `${query}`, '$options': 'i'} },
                        { 'name': { '$regex': `${query}`, '$options': 'i'}  }
                    ]
                });

            if (!DBResponse.length) return response.status(404).json(errors.not_found);

            console.log(DBResponse.length);

            return response.status(200).json(DBResponse);

        } catch (error) {
            if (isTest) console.log(error);
            return response.status(500).json(errors.internal_server_error);
        }
    },

    paginate: async (request: Request, response: Response) => {

        const { page, perPage = 10, categories = [] } = request.query as {
            page?: string,
            perPage?: string,
            categories?: string[]
        };

        if (!(page && perPage)) return response.status(400).json(errors.bad_request);

        try {
            const skip = (Number(page) - 1) * Number(perPage)
            const limit = Number(perPage)
            const query = {};

            if (categories.length > 0) {
                Object.assign(query, { 'category._id': { $in: categories } })
            }

            const totalProducts = await Product.count(query);

            const DBResponse = await Product.find(query).limit(limit).skip(skip).sort({ name: 'asc' });
            if (isTest) console.log("page :" + page, "perPage: " + perPage);

            if (!DBResponse.length) return response.status(404).json(errors.not_found);

            const responseJSON = {
                totalProducts: totalProducts,
                totalPages: Math.ceil(totalProducts / Number(perPage)),
                products: DBResponse,
            }

            return response.status(200).json(responseJSON);


        } catch (error) {
            if (isTest) console.log(error);
            response.status(500).json(errors.internal_server_error);
        }
    },

    update: async (request: Request, response: Response) => {

        const { id } = request.params
        const {
            name,
            SKU,
            dimensions,
            weight,
            category,
            stock
        } = request.body;

        try {

            const DBResponse = await Product.updateOne(
                {
                    _id: id
                },
                {
                    $set: {
                        name,
                        SKU,
                        dimensions,
                        weight,
                        category,
                        stock
                    }
                }
            );

            return response.status(204).json(DBResponse);


        } catch (error) {
            if (isTest) console.log(error);
            response.status(500).json(errors.internal_server_error);
        }
    },
}

export default productControllers;