import authControllers from './controller';
import middlewareAuth from '../../infra/middlewares/login'
import { Router } from 'express';
//TODO: IMPORT MIDDLEWARES

const authRoutes = Router();

authRoutes.get('/login', middlewareAuth.login, authControllers.login);



export default authRoutes;

