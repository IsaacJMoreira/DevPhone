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
    _id: string;
    name: string;
    email: string;
    credential: string;// CLI | ADM | INACTIVE
    password: string;
    address: IAddress;
    mainPhone: string;    
};

const userSchema = new Schema<IUser>({
    name: { type: String, required: true},
    email: { type: String, required: true},
    credential: { type: String, required: true, default: "CLI"},
    password: { type: String, required: true},//every new user is a client by default. Will be usefull when we need to create the routes
    mainPhone: { type:String, required: false },

    address: [{
        nikName: { type: String, required: true},
        street: { type: String, required: true},
        number: { type: String, required: true},
        zipCode: { type: String, required: true},
        neighborhood: { type: String, required: true},
        city: { type: String, required: true},
        state: { type: String, required: true},
        country: { type: String, required: true},        
    },{
        _id: false
     }]
},
{
   timestamps: true, 
});

const User = model<IUser>('User', userSchema);

export default User;