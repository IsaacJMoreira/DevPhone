import { Router } from 'express';
import userControllers from './controller';
//TODO: IMPORT MIDDLEWARES

const userRoutes = Router();

userRoutes.post('/logon', userControllers.create);
userRoutes.get('/allusers', userControllers.findAll);
userRoutes.get('/profile/:id', userControllers.findOne);
userRoutes.put('/profile/:id', userControllers.update);

export default userRoutes;