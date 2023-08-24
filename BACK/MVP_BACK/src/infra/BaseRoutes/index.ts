import { Router } from 'express';
import productRoutes from '../../modules/Product/routes';
import orderRoutes from '../../modules/Order/routes';


const routes= Router();

routes.use(productRoutes);
routes.use(orderRoutes);

export default routes;