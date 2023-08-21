import { Router } from 'express';
import { User, Product, ShoppingCart, Categorie, Order } from '../../models'

const routes= Router();

routes.get('/', async(req, res) =>{
    try {
        await User.create({

            name: "Isaac",
            email: 'isaac@email.com',
            password: "42069"

        });

        await Product.create({

            name: "Vibrador",
            SKU: "7896001283008",
            dimensions:{
                
                height: 8,
                width: 8,
                length: 30,

             },
             weight:{
                weight: 10,
                dimension: "Kg",
             },
            category: [
                
                { 
                    code: "V-COLOR",
                    name: "Black",
                 },
                 { 
                    code: "SIZE",
                    name: "Giant",
                 }
            ],

        });

        await ShoppingCart.create(
            {
               
                items:[
                    {
                        itemID: "any1",
                        itemSKU:"any1",
                        quantity: 69420
                    },
                    {
                        itemID: "any2",
                        itemSKU:"any1",
                        quantity: 6942011
                    }
                ],
                ownerID: "Isaac"
            }
        );

        await Categorie.create(
            {
                code: "V-COLOR",
                name: "Black",
            }            
        );

        await Order.create({
            
            items:[
                {
                    itemID: "any1",
                    itemSKU:"any1",
                    quantity: 69420
                },
                {
                    itemID: "any2",
                    itemSKU:"any1",
                    quantity: 6942011
                }
            ],
            ownerID: "24",
            shippingCode: "Correios",
        }
        );

        return res.json("OK!!!");
        
    } catch (error) {
        console.log("falhou!", error);   
    };
});

routes.get('/teste', async (req, res) =>{
    console.log("Deu bom!");
    return res.json("UMENO ISSO PRESTA!");
})

export default routes;