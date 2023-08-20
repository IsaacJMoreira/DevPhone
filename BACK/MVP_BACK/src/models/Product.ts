/*****************************************
 *        🤓 ISAAC ESTEVE AQUI 🤓       *
 *****************************************/


import { Schema, model } from 'mongoose';


interface IDimensions{
    height: number;
    width: number;
    length: number;
    dimension: string;
};

interface IWeight{
    weight: number;
    Dimension: string;
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
    category:[ { 

        code: { type: String, required: true},
        name: { type: String, required: true},
        fatherCategory: { type: String, required: true, default: "root"},
     },],

    },
    {
        timestamps: true,
    },
);

const Product = model<IProduct>('Product', productSchema);

export default Product;


