import { Router } from 'express';
import productRoutes from '../../modules/Product/routes';
import shoppingCartRoutes from '../../modules/ShoppingCart/routes';


const routes= Router();

routes.use(productRoutes);
routes.use(shoppingCartRoutes);

export default routes;