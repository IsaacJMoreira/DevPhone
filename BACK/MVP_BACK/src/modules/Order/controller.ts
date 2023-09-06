/*****************************************
 *        🤓 ISAAC ESTEVE AQUI 🤓       *
 *****************************************/

import { Request, Response } from "express";
import { Order, Product, User } from "../../models";
import errors from "../errors";

const isTest = true;//ATTENTION!!!! REMOVE!

const orderControllers = {

    create: async (request: Request, response: Response) => {

        
        const {
            ownerID,
            items
        } = request.body;
        

        try {
            const userExistes = await User.findById({ _id: ownerID }).count();

            console.log(userExistes);
            
            if(!userExistes) return response.status(400).json(errors.bad_request);

        } catch (error) {

            if(isTest) console.log(error);
            return response.status(500).json(errors.internal_server_error);            
        }

       

        let lowStockFlag: number = 0;//🚩 

        //WE TEST IF ANY ITEM IS EITHER LOW IN STOCK OR MISSING COMPLETELY
        try {

            if(!items) return response.status(400).json(errors.bad_request);

            for(let i = 0; i < items.length; i++){

                const id = items[i].itemID;
                const decrement = items[i].quantity;

                const DBStockResponse = await Product.findById({_id: id});

                if(!DBStockResponse)  lowStockFlag++;
                else if( (DBStockResponse.stock < decrement) || (!DBStockResponse.enabled) ) lowStockFlag++;
            }

            console.log("flag stock:", lowStockFlag);

            if(lowStockFlag) return response.status(400).json(errors.bad_request);

            //WE NEED TO TREAD LIGHTLY HERE. Any mistake means we fucked up opdating the new stock to the bank
            let updateFlag: number = 0;//🚩 

            for(let i = 0; i < items.length; i++){

                const id = items[i].itemID;
                const decrement = items[i].quantity;

                const DBUpdateResponse = await Product.updateOne({
                    _id: id
                },{
                    $inc:{ stock: -decrement}
                });
                if(!DBUpdateResponse) updateFlag++;
            }

            console.log("flag update:", updateFlag);

            if(updateFlag)  throw new Error(`ERROR: ${new Date()} - Error updating stock while placing order.`);


        } catch (error) {
            if(isTest) console.log(error);
            return response.status(500).json(errors.internal_server_error);
        }

        
        try {
            const DBResponse = await Order.create({
                ownerID: ownerID.toString(),
                items: items
            }); 
            if(isTest) console.log(DBResponse);
            return response.sendStatus(200);
        } catch (error) {
            if(isTest) console.log(error);
            return response.status(500).json(errors.internal_server_error);           
        }  
       
    },

    findByOwnerId: async (request: Request, response: Response) => {
            
        const { ownerID } = request.params;
        try {

            const DBResponse = await Order.find({
                ownerID: ownerID
            });

            if(!DBResponse.length) return response.status(404).json(errors.not_found);

            return response.status(200).json(DBResponse);
         
        } catch (error) {
            
            if(isTest) console.log(error);
            response.status(500).json(errors.internal_server_error);
        }
    },    

    findAll: async (request: Request, response: Response) => {

        try {
            
            const DBResponse = await Order.find();
            
            if(!DBResponse.length) return response.status(404).json(errors.not_found);

            return response.status(200).json(DBResponse);

        } catch (error) {
            if(isTest) console.log(error);
            response.status(500).json(errors.internal_server_error);            
        }

    },

    update: async (request: Request, response: Response) => {
        
        const  { id }  = request.params
        const { 
                items,
                shippingCode,
                status
            } = request.body;

        try {

            const DBResponse = await Order.updateOne(
                {
                    _id: id
                }, 
                {
                    items,
                    shippingCode,
                    status
                }
            );

            return response.status(204).json(DBResponse);
       
            
        } catch (error) {
            if(isTest) console.log(error);
            response.status(500).json(errors.internal_server_error);            
        }

    },
}

export default orderControllers;