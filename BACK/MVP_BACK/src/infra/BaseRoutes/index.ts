import { Router } from 'express';
import productRoutes from '../../modules/Product/routes';


const routes= Router();

routes.use(productRoutes);

export default routes;