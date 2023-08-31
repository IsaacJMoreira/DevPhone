import userControllers from "./controller"
import middlewareUsers from "../../infra/middlewares/user"
import { Router } from 'express';


const userRoutes = Router();

userRoutes.post('/logon', middlewareUsers.newUser, userControllers.create);
