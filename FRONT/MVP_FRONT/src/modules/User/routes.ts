import { Router } from 'express';
import AuthValidation from '../../validations/auth/login'
import AuthController from '../Auth/authController';
import userController from './controller';

const userRoutes = Router()

userRoutes.post("/login", AuthValidation, AuthController.login)