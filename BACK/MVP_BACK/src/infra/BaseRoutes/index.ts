import { Router } from 'express';
import productRoutes from '../../modules/Product/routes';
import orderRoutes from '../../modules/Order/routes';
import categorieRoutes from '../../modules/Categorie/routes';
import userRoutes from '../../modules/User/routes';
import authRoutes from '../../modules/Auth/routes';


const routes= Router();

routes.use(productRoutes);
routes.use(orderRoutes);
routes.use(categorieRoutes);
routes.use(userRoutes);
routes.use(authRoutes);

export default routes;