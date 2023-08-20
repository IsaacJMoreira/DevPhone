import { Router } from "express";
import controller from './controller'

const routes = Router();

routes.post("/user",controller.create);
routes.get("/user", controller.findAll);


export default routes;