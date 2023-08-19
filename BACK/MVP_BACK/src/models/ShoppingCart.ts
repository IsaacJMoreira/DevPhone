/*****************************************
 *        🤓 ISAAC ESTEVE AQUI 🤓       *
 *****************************************/


import { Schema, model } from 'mongoose'

interface IItems extends Array<IItems>{
    itemID: string;
    itemSKU: string;
    quantity: number;    
}

interface IShoppinCart{
    fulfilled: boolean;
    items: IItems;
    ownerID: string
};

const shoppingCartSchema = new Schema<IShoppinCart>(
    {
        fulfilled: { type: Boolean, required: true, default: false },
        items:[
            {
                itemID: { type: String, required: true },
                itemSKU: { type: String, required: true },
                quantity: { type: Number, required: true }
            }
        ],
        ownerID: { type: String, required: true }
    },
    {
        timestamps: true,
    }
);

const ShoppingCart = model<IShoppinCart>('Cart', shoppingCartSchema);

export default ShoppingCart;