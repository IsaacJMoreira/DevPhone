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
                imgURL,
                description,
                shortDescription,
                alt
            }); 
            //IDEALY, WE WILL DEAL WITH THE IMAGES HERE
            if(isTest) console.log(DBResponse);
            return response.sendStatus(200);
        } catch (error) {
            if(isTest) console.log(error);
            return response.status(500).json(errors.internal_server_error);           
        }       
    },

    imgUpload: async (request: Request, response: Response)=>{
        const { file } = request;
        
        if(!file?.destination) return response.status(400).json(errors.bad_request);
        return response.sendStatus(201);

    },

    findOne: async (request: Request, response: Response) => {
            
        const { id } = request.params;
        try {

            const DBResponse = await Product.findById({_id: id});

            if(!DBResponse) return response.status(404).json(errors.not_found);

            return response.status(200).json(DBResponse);
         
        } catch (error) {
            
            if(isTest) console.log(error);
            response.status(500).json(errors.internal_server_error);
        }
    },

    //This can implement other search Items:
    // Symbol.find(
    //     {
    //       $or: [
    //         { 'symbol': { '$regex': input, '$options': 'i' } },
    //         { 'name': { '$regex': input, '$options': 'i' } }
    //       ]
    //     }
    //   ) 
    search: async (request: Request, response: Response) => {
             const category = request.query.category;

             if(!category) return response.status(400).json(errors.bad_request);
             

        try {
           
            const DBResponse =  await Product.find({ 'category.name': category });
            
            if(!DBResponse.length) return response.status(404).json(errors.not_found);

            return response.status(200).json(DBResponse);

        } catch (error) {
            if(isTest) console.log(error);
            return response.status(500).json(errors.internal_server_error);                       
        }
    },


    findAll: async (request: Request, response: Response) => {

        try {
            
            const DBResponse = await Product.find();
            if(isTest)console.log("Alguém tá tentando acessar!");
            
            if(!DBResponse.length) return response.status(404).json(errors.not_found);

            return response.status(200).json(DBResponse);
            

        } catch (error) {
            if(isTest) console.log(error);
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
                    $set:{
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
            if(isTest) console.log(error);
            response.status(500).json(errors.internal_server_error);            
        }
    },
}

export default productControllers;