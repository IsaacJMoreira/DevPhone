/*****************************************
 *        🤓 ISAAC ESTEVE AQUI 🤓       *
 *****************************************/

import { Schema, model } from "mongoose";

interface IItems extends Array<IItems> {
  itemID: string;
  itemSKU: string;
  quantity: number;
}

interface IAddress {
  nikName: string;
  street: string;
  number: string;
  zipCode: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
}

interface IOrder {
  status: string;
  items: IItems;
  ownerID: string;
  shippingCode: string;
  enabled: boolean;
  address: IAddress;
}

const shoppingCartSchema = new Schema<IOrder>(
  {
    status: {
      type: String,
      required: true,
      default: "Esperando confirmação de pagamento",
    },
    items: [
      {
        itemID: { type: String, required: true },
        itemSKU: { type: String, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    ownerID: { type: String, required: true },
    shippingCode: { type: String, required: true, default: " " },
    address: {
      nikName: { type: String, required: true },
      street: { type: String, required: true },
      number: { type: String, required: true },
      zipCode: { type: String, required: true },
      neighborhood: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true },
    },
    enabled: { type: Boolean, required: true, default: true },
  },
  {
    timestamps: true,
  }
);

const Order = model<IOrder>("Order", shoppingCartSchema);

export default Order;
