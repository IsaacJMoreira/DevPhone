import { DataTypes, Model,ModelDefined,Optional } from "sequelize";
import { db } from "../../database/Db_test";


export class IUser extends Model{
   declare _id: string;
   declare name: string;
   declare email: string;
   declare credential: string;
   declare password: string;
   declare address: string;    
};

export type UserPayload = Optional <UserPayload,'id'>
export type UserModel = ModelDefined<IUser, UserPayload>

export const UserModel = User.init({
    id: { 
        type:DataTypes.INTEGER,
        primarykey: true,
        autoIncrement:true, 
    },
    nome:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    Credential:{
        type:DataTypes.STRING
    },

})

export default UserModel;