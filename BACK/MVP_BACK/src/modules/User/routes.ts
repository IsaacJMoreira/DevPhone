import { Router } from 'express';
import userControllers from './controller';
import middlewareUsers from '../../infra/middlewares/user';
import decryptProvider from '../../infra/middlewares/auth';
//TODO: IMPORT MIDDLEWARES

const userRoutes = Router();

userRoutes.post('/logon', middlewareUsers.newUser , userControllers.create);
userRoutes.get('/allusers', decryptProvider, userControllers.findAll);
userRoutes.get('/profile/:id', decryptProvider, userControllers.findOne);
userRoutes.put('/profile/:id', decryptProvider, middlewareUsers.updateUser , userControllers.update);


export default userRoutes;