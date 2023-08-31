import { Router } from 'express';
import authControllers from './controller';
import middlewareAuth from '../../infra/middlewares/login'
//TODO: IMPORT MIDDLEWARES

const authRoutes = Router();

authRoutes.get('/login', middlewareAuth.login, authControllers.login);



export default authRoutes;