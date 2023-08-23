/*****************************************
 *        🤓 ISAAC ESTEVE AQUI 🤓       *
 *****************************************/

import { Schema, model } from 'mongoose'

interface IItems extends Array<IItems>{
    itemID: string;
    itemSKU: string;
    quantity: number;    
}



interface IOrder{
    status: string;
    items: IItems;
    ownerID: string;
    shippingCode: string
};

const shoppingCartSchema = new Schema<IOrder>(
    {
        status: { type: String, required: true, default: "Esperando confirmação de pagamento" },
        items:[
            {
                itemID: { type: String, required: true },
                itemSKU: { type: String, required: true },
                quantity: { type: Number, required: true }
            }
        ],
        ownerID: { type: String, required: true },
        shippingCode: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const Order = model<IOrder>('Order', shoppingCartSchema);

export default Order;