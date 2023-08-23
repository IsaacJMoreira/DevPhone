/*****************************************
 *        🤓 ISAAC ESTEVE AQUI 🤓       *
 *****************************************/

import { Schema, model} from 'mongoose'

interface IAddress{
    nikName: string;
    street: string;
    number: string;
    zipCode: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
}


interface IUser{
    name: string;
    email: string;
    credential: string;// client | admin | other
    password: string;
    address: IAddress;
};

const userSchema = new Schema<IUser>({
    name: { type: String, required: true},
    email: { type: String, required: true},
    credential: { type: String, required: true, default: "CLIENT"},
    password: { type: String, required: true},//every new user is a client by default. Will be usefull when we need to create the routes
    address: [{
        nikName: { type: String, required: true},
        street: { type: String, required: true},
        number: { type: String, required: true},
        zipCode: { type: String, required: true},
        neighborhood: { type: String, required: true},
        city: { type: String, required: true},
        state: { type: String, required: true},
        country: { type: String, required: true},        
    }]
},
{
   timestamps: true, 
});

const User = model<IUser>('User', userSchema);

export default User;