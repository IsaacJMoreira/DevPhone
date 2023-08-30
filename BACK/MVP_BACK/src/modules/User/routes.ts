import { Router } from 'express';
import userController from "./controller"

const userRoutes = Router()

// rota teste
userRoutes.post("/testeUser", userController.create);

