/*****************************************
 *        🤓 ISAAC ESTEVE AQUI 🤓       *
 *****************************************/


import { Schema, model } from 'mongoose';


interface IDimensions{
    height: number;
    width: number;
    length: number;
    dimension: string    
};

interface IWeight{
    weight: number;
    dimension: string;
};

interface ICategory extends Array<ICategory>{
    code: string;
    name: string;
    fatherCategory: string;
};

interface IProduct{
    name: string;
    SKU: string;
    dimensions: IDimensions;
    weight: IWeight;
    category: ICategory;
    stock: number;
    price: number;
    imgURL: string;
    description: string;
    shortDescription: string;
    alt: string;
    enabled: boolean
};

const productSchema = new Schema<IProduct>(
    {
    name: { type: String, required: true},
    SKU: { type: String, required: true},
    dimensions:{ 

        height: { type: Number, required: true},
        width:  { type: Number, required: true},
        length: { type: Number, required: true},
        dimension: { type: String, required: true, default: "cm"},

     },
     weight: {
        weight: { type: Number, required: true},
        dimension: { type: String, required: true, default: "g"},
     },
    category:[ { 

        code: { type: String, required: true},
        name: { type: String, required: true},
        fatherCategory: { type: String, required: true, default: "root"},
     },{
        _id: false
     }],

     stock: { type: Number, required: true, default: 0},
     price:  { type: Number, required: true, default: 0},
     imgURL: { type: String, required: true},
     description: { type: String, required: true},
     shortDescription: { type: String, required: true},
     alt: { type: String, required: true},
     enabled: { type: Boolean, required: true, default: true }

    },
    {
        timestamps: true
    },
);

const Product = model<IProduct>('Product', productSchema);

export default Product;


