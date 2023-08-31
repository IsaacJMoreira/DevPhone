/*****************************************
 *        🤓 ISAAC ESTEVE AQUI 🤓       *
 *****************************************/

import { Schema, model } from 'mongoose';

interface ICategorie{
    code: string;
    name: string;
    fatherCategory: string;
    enabled: boolean;
};

const categorySchema = new Schema<ICategorie>(
    {
        code: { type: String, required: true},
        name: { type: String, required: true},
        fatherCategory: { type: String, required: true, default: "root"},
        enabled: { type: Boolean, required: true, default: true}
    },
    {
        timestamps: true
    }
);


const Categorie = model<ICategorie>('Categories', categorySchema);

export default Categorie;
