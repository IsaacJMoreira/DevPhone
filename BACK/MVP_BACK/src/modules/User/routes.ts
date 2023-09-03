import userControllers from "./controller"
import middlewareUsers from "../../infra/middlewares/user"
import { Router } from 'express';
import decryptProvider from "../../infra/middlewares/auth";
import validateCredential from "../../infra/middlewares/validadeCredential";



const userRoutes = Router();

userRoutes.post('/logon', middlewareUsers.newUser, userControllers.create); //this I'll have to think
userRoutes.get('/allusers', decryptProvider, validateCredential.ADM, userControllers.findAll);
userRoutes.get('/profile/:id', decryptProvider, validateCredential.CLI, userControllers.findOne);
userRoutes.put('/profile/:id', decryptProvider, validateCredential.CLI, middlewareUsers.updateUser , userControllers.update);

export default userRoutes;