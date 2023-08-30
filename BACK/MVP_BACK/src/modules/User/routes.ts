import { Router } from 'express';
import userControllers from './controller';
const middlewareUsers = require('../../infra/middlewares/user');
//TODO: IMPORT MIDDLEWARES

const userRoutes = Router();

userRoutes.post('/logon', middlewareUsers.newUser , userControllers.create);
userRoutes.get('/allusers', userControllers.findAll);
userRoutes.get('/profile/:id', userControllers.findOne);
userRoutes.put('/profile/:id', middlewareUsers.updateUser , userControllers.update);

export default userRoutes;