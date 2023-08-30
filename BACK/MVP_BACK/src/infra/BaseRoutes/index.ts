import { Router } from 'express';
import productRoutes from '../../modules/Product/routes';
import orderRoutes from '../../modules/Order/routes';
import categorieRoutes from '../../modules/Categorie/routes';
import userRoutes from '../../modules/User/routes';
const globalErrorHandler = require("../../infra/middlewares/handleError"); 


const routes= Router();

routes.use(productRoutes);
routes.use(orderRoutes);
routes.use(categorieRoutes);
routes.use(userRoutes);

routes.use(globalErrorHandler);

export default routes;