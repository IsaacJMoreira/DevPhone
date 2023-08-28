import { Router } from 'express';
import AuthValidation from '../../validations/auth/login'
import AuthController from './controller';
import userController from '../User/controller';

const AuthRoutes = Router()

AuthRoutes.post("/loginteste", AuthValidation, AuthController.login)

export default AuthRoutes;